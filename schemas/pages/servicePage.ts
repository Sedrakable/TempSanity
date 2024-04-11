import { defineType } from "sanity";
import { commonPreviewConfig } from "../previewConfig";

export default defineType({
  name: "servicePage",
  title: "Service Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "path",
      title: "Path",
      type: "localPath",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hero",
      title: "Hero",
      type: "hero",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "reference",
      to: { type: "featuresBlock" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "processes",
      title: "Processes",
      type: "reference",
      to: { type: "processBlock" },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "work",
      title: "Work",
      type: "reference",
      to: { type: "workBlock" },
    },
  ],
  preview: commonPreviewConfig("Service Page"),
});
