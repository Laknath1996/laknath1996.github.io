import markdownIt from "markdown-it";
import { katex } from "@mdit/plugin-katex";
import * as yaml from "js-yaml";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  // YAML data files (news.yml, publications.yml, ...)
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // `draft: true` posts are visible while previewing (npm start) but skipped in builds.
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") return false;
  });

  // Markdown with build-time KaTeX: $inline$ and $$display$$ math.
  const md = markdownIt({ html: true, typographer: true }).use(katex, {
    throwOnError: false,
  });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/blog/feed.xml",
    collection: { name: "post", limit: 20 },
    metadata: {
      language: "en",
      title: "Ashwin De Silva — blog",
      base: "https://laknath1996.github.io/",
      author: { name: "Ashwin De Silva" },
    },
  });

  // Bold my own name in author lists.
  eleventyConfig.addFilter("boldMe", (authors) =>
    authors.replace("Ashwin De Silva", "<strong>Ashwin De Silva</strong>")
  );
  eleventyConfig.addFilter("year", (d) => new Date(d).getUTCFullYear());
  eleventyConfig.addFilter("niceDate", (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric", timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("startsWith", (s, prefix) => s.startsWith(prefix));
  eleventyConfig.addFilter("head", (arr, n) => arr.slice(0, n));

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/cv.pdf");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "assets/katex/katex.min.css",
    "node_modules/katex/dist/fonts": "assets/katex/fonts",
  });

  eleventyConfig.addCollection("post", (api) =>
    api.getFilteredByGlob("src/blog/posts/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
