import { defineType } from "sanity";

export default defineType({
  name: "localPath",
  title: "Local Path",
  type: "string",
  options: {
    list: [
      "/home",
      "/branding",
      "/landing-page",
      "/total-package",
      "/custom-work",
      "/about-work",
      "/contact",
      "/terms-and-conditions",
      "/privacy-policy",
    ],
  },
});
