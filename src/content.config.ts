// src/content.config.ts
// This file tells Astro what content collections exist and what shape their data takes.
// Think of it as a schema definition — like defining columns in a database table.

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const galleries = defineCollection({
  // Tell Astro to load markdown files from the galleries folder
  loader: glob({ pattern: "**/*.md", base: "./src/content/galleries" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    date: z.string(),
    order: z.number().optional(),
    photos: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ),
  }),
});

export const collections = { galleries };