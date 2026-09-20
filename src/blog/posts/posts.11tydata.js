export default {
  layout: "post.njk",
  eleventyComputed: {
    permalink: (data) => `/blog/${data.page.fileSlug}/`,
  },
};
