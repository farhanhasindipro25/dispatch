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
  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatar: v.string(),
    description: v.string(),
  }),
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
