import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        tagline: z.string(),
        thumbnail: z.string(),
        tags: z.array(z.string()),
        githubLink: z.string().optional(),
        liveLink: z.string().optional(),
        date: z.string(), 
      })
    }),

    experience: defineCollection({
      type: 'data',
      source: 'experience/*.json',
      schema: z.object({
        company: z.string(),
        role: z.string(),
        period: z.string(),
        location: z.string(),
        achievements: z.array(z.string()),
        stack: z.array(z.string()).optional(),
        keyResults: z.string().optional()
      })
    })
  }
})