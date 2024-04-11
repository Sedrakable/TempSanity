import { defineType } from "sanity";
import { commonPreviewConfig } from "../previewConfig";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "services",
      title: "Services",
      type: "reference",
      to: { type: "servicesBlock" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "values",
      title: "Values",
      type: "reference",
      to: { type: "valuesBlock" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "about",
      title: "About",
      type: "reference",
      to: { type: "aboutBlock" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "work",
      title: "Work",
      type: "reference",
      to: { type: "workBlock" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footer",
      title: "Footer",
      type: "reference",
      to: { type: "footer" },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: commonPreviewConfig("Home Page"),
});
