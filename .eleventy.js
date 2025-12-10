module.exports = function(eleventyConfig) {
  // Copy CSS straight through to dist/css
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  
  // Copy `img/` to `_site/img/`
  eleventyConfig.addPassthroughCopy({"src/img": "img"});
  
  // Copy any .jpg file to `_site`, via Glob pattern
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  return {
	dir: {
	  input: "src",
	  includes: "_includes",
	  layouts: "_includes/layouts",
	  output: "dist"
	}
  };
};
