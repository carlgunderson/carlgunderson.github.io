import { z } from 'zod'

export const ProjectSchema = z.object({
  slug: z.string(),
  displayName: z.string(),
  link: z.string().optional(),
  description: z.string(),
  disclaimer: z.string().optional(),
  achievements: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  technologies: z.array(z.string()),
  color: z.string(),
  imageUrl: z.string().optional(),
});

export const JobSchema = z.object({
  slug: z.string(),
  displayName: z.string(),
  industries: z.array(z.string()),
  platforms: z.array(z.string()),
  link: z.string(),
  description: z.string(),
  logoUrl: z.string(),
  bgUrl: z.string(),
  bgColor: z.string(),
  role: z.string(),
  roleSummary: z.string(),
  timeline: z.string(),
  projects: z.array(ProjectSchema),
});

export type IProject = z.infer<typeof ProjectSchema>;
export type IJob = z.infer<typeof JobSchema>;