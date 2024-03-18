import { z, defineCollection } from "astro:content";

const taskCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    status: z.string(),
  }),
});

export const collections = {
  tasks: taskCollection,
};
