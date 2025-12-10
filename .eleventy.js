module.exports = function(eleventyConfig) {
  // Copy CSS straight through to public/css
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  // Copy images to public/img
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });

  // Copy any .jpg file
  eleventyConfig.addPassthroughCopy("**/*.jpg");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "public"   // CHANGE THIS from dist -> public
    }
  };
};
