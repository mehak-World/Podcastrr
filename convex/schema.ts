import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts:  defineTable({
    user: v.id("users"),
    audioStorageId: v.optional(v.id("_storage")),
    audioUrl: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.id('_storage')),
    podcastTitle: v.string(),
    podcastDescription: v.string(),
    voicePrompt: v.string(),
    voiceType: v.string(),
    imagePrompt: v.string(),
    audioDuration: v.number(),
    views: v.number(),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
  }).searchIndex('search_author', {searchField: 'author'})
  .searchIndex('search_title', {searchField: 'podcastTitle'}),
  users: defineTable({
    email: v.string(),
    clerkId: v.string(),
    name: v.string(),
    imageUrl: v.string()
  })
});