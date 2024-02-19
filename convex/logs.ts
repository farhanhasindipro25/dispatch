import { LogType } from "@/types";
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent messages.
    const messages = await ctx.db.query("logs").order("desc").take(5);
    // Reverse the list so that it's in a chronological order.
    return messages.reverse();
  },
});

export const create = mutation({
  args: { body: v.string(), user: v.id('users'), title: v.string(), },
  handler: async (ctx, { user, body, title }) => {
    // Send a new message.
    await ctx.db.insert("logs", {
      user, body, title,
      type: LogType.Blog,
    });
  },
});
