module.exports = function(eleventyConfig) {
  // Passthrough for CSS
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  // Passthrough for images
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "public"  // Cloudflare Pages automatically serves 'public/'
    }
  };
};
