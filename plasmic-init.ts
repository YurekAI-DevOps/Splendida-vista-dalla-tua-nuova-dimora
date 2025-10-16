import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "kJzFmgqoHnGMG5sMc5rCjV";
export const projectApiToken = "vqS3AKvTej5l8d719KpQI4Fx6hHEUKQZF9E44OA8nF1gCV4vfwdmLsFXdkqqpFH0YFEwxEsG1CbYdHY1Yd9w";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
