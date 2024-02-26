import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { LogType, BadgeType } from "@/types/index";

export default defineSchema({
  logs: defineTable({
    user: v.id('users'),
    body: v.string(),
    title: v.string(),
    type: v.union(
      v.literal(LogType.Blog),
      v.literal(LogType.Achievements),
      v.literal(LogType.Log),
      v.literal(LogType.Projects),
      v.literal(LogType.Work),
      v.literal(LogType.Socials),
    ),
  })
    .index('by_type', ['type']),
  log_tags: defineTable({
    log_id: v.id('logs'),
    tag_id: v.id('tags'),
  }).index("by_log_id", ["log_id"]).index("by_tag_id", ["tag_id"]),
  tags: defineTable({
    name: v.string()
  }),
  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatar: v.string(),
    description: v.string(),
    // TODO:
    tokenIdentifier: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"]),
  siteConfig: defineTable({
    title: v.string(),
    domain: v.string(),
    description: v.string(),
    keywords: v.string(),
  }),
  badges: defineTable({
    type: v.union(
      v.literal(BadgeType.Active),
      v.literal(BadgeType.Inactive),
    ),
    text: v.string(),
    subtext: v.string(),
  })
});
