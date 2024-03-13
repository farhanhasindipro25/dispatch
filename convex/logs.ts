import { LogType } from "@/types";
import { query } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { authMutation, authQuery } from "./util";
import { Id } from "./_generated/dataModel";

export const getLogs = query({
  args: { paginationOpts: paginationOptsValidator, userId: v.string() },
  handler: async (ctx, { paginationOpts, userId }) => {
    const user = await ctx.db.get(userId as Id<'users'>);
    
    if (!user) {
      return {isDone: true, page: [], continueCursor: ''};
    }

    const result = await ctx.db.query("logs").filter(q=> q.eq(q.field('user'), user?._id)).order("desc").paginate(paginationOpts);
    const page = await Promise.all(result.page.map(async (log) => {
      const tagIds = await ctx.db.query("log_tags").withIndex("by_log_id", q => q.eq("log_id", log._id)).collect();
      const tags = await Promise.all(tagIds.map(async (tagId) => {
        return ctx.db.get(tagId.tag_id)
      }))
      const logWithTag = { ...log, tags }
      return logWithTag
    }));

    return { ...result, page };
  },
});

export const getMyLogs = authQuery({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, { paginationOpts }) => {
    const user = ctx.user;
    if (!user) {
      return { isDone: true, page: [], continueCursor: '' };
    }
    const result = await ctx.db.query("logs").order("asc").filter(q=> q.eq(q.field('user'), user?._id)).paginate(paginationOpts);
    const page = await Promise.all(result.page.map(async (log) => {
      const tagIds = await ctx.db.query("log_tags").withIndex("by_log_id", q => q.eq("log_id", log._id)).collect();
      const tags = await Promise.all(tagIds.map(async (tagId) => {
        return ctx.db.get(tagId.tag_id)
      }))
      const logWithTag = { ...log, tags }
      return logWithTag
    }));

    return { ...result, page };
  },
});

export const getLog = query({
  args: { logId: v.id('logs') },
  handler: async (ctx, { logId }) => {
    const log = await ctx.db.get(logId);
    if (!log) {
      return null
    }
    const tagIds = await ctx.db.query("log_tags").withIndex("by_log_id", q => q.eq("log_id", log._id)).collect();
    const tags = await Promise.all(tagIds.map(async (tagId) => {
      return ctx.db.get(tagId._id)
    }))
    const logWithTag = { ...log, tags }
    return logWithTag
  },
});

export const getTagWithLogs = query({
  args: { tagId: v.id('tags') },
  handler: async (ctx, { tagId }) => {
    const tag = await ctx.db.get(tagId);
    if (!tag) {
      return null
    }
    const logIds = await ctx.db.query("log_tags").withIndex("by_tag_id", q => q.eq("tag_id", tag._id)).collect();
    const logs = await Promise.all(logIds.map(async (logId) => {
      return ctx.db.get(logId._id)
    }))
    return { tag, logs };
  },
});

export const getTags = query({
  args: {},
  handler: async (ctx) => await ctx.db.query("tags").collect(),
});


// Mutations
export const createLog = authMutation({
  args: {
    body: v.string(),
    title: v.string(),
    type: v.optional(v.union(
      v.literal(LogType.Blog),
      v.literal(LogType.Achievements),
      v.literal(LogType.Log),
      v.literal(LogType.Projects),
      v.literal(LogType.Work),
      v.literal(LogType.Socials),
    )),
    tag_id_list: v.array(v.id('tags')),
  },
  handler: async (ctx, args) => {
    const { tag_id_list, ...log } = args;
    const savedLogId = await ctx.db.insert("logs", { ...log , user: ctx.user._id });
    await Promise.all(tag_id_list.map((tag) => ctx.db.insert('log_tags', {
        log_id: savedLogId,
        tag_id: tag
      })
    ))
    return {
      message: 'Log Saved'
    }
  },
});
