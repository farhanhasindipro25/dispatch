import { LogType } from "@/types";
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const getLogs = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, { paginationOpts }) => {
    const logs = await ctx.db.query("logs").order("desc").paginate(paginationOpts);
    const logsWithTags = await Promise.all(logs.page.map(async (log) => {
      const tagIds = await ctx.db.query("log_tags").withIndex("by_log_id", q => q.eq("log_id", log._id)).collect();
      const tags = await Promise.all(tagIds.map(async (tagId) => {
        return ctx.db.get(tagId._id)
      }))
      const logWithTag = { ...log, tags }
      return logWithTag
    }));

    return logsWithTags.reverse();
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
  handler: (ctx) => ctx.db.query("tags").collect(),
});


// Mutations
export const create = mutation({
  args: { body: v.string(), user: v.id('users'), title: v.string(), },
  handler: async (ctx, { user, body, title }) => {
    await ctx.db.insert("logs", {
      user, body, title,
      type: LogType.Blog,
    });
  },
});
