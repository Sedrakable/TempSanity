import { defineType } from "sanity";
import { commonPreviewConfig } from "../previewConfig";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "fancyText",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: commonPreviewConfig("Contact Page"),
});
