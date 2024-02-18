import { LogType } from "@/types";
import { api } from "./_generated/api";
import { internalMutation, type MutationCtx } from "./_generated/server";
import { Id } from "./_generated/dataModel";
// const user = {
//   avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAB4FBMVEX///+VnKLUih0AAAD5tqb1woPR1dgCAwf+6JOYn6XxXF7/5cK0tLQkJCcAAAbXjB16wEPX2947PT//vKz5+fnv7+/g4ODw8PD/7MgAAAnbjx1DREaRl53p6em7u7udoqjLy8uIiImVlZaenp9yd3x8gYaGi5HExMRpbXIRAABw",
// }
const data = [
    {
      "body": "This is a blog post about my recent trip.",
      "title": "My Travel Experience",
      "type": 0
    },
    {
      "body": "Today, I achieved a milestone in my project.",
      "title": "Project Milestone Reached",
      "type": 0
    },
    {
      "body": "Daily log: Worked on debugging the software.",
      "title": "Debugging Session",
      "type": 1
    },
    {
      "body": "Completed my latest project successfully.",
      "title": "Project Completion",
      "type": 0
    },
    {
      "body": "Attended a networking event.",
      "title": "Networking Event",
      "type": 2
    },
    {
      "body": "Today's work update: Completed coding the new feature.",
      "title": "New Feature Development",
      "type": 3
    }
] as const;
export default internalMutation({
  handler: async (ctx: MutationCtx) => {
    // If this project already has a populated database, do nothing
    const anyMessage = await ctx.db.query("logs").first();
    if (anyMessage) return;

    // If not, post each of the seed messages with the given delay
    for (const { body , title, type } of data) {
      await ctx.scheduler.runAfter(10, api.logs.create, {
        body,
        title,
        user: "jh70f4pqejada669kwy5v73a0s6kqq5q" as Id<"users">
      });
    }
  },
});
