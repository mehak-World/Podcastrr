import { v } from "convex/values";
import { internalMutation, query } from "./_generated/server";

export const createUser = internalMutation({
    args:{
        clerkId: v.string(),
        email: v.string(),
        imageUrl: v.string(),
        name: v.string()
    }, handler: async (ctx, args) => {
        ctx.db.insert("users", )
    }
}

)