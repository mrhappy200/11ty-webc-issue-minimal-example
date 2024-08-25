import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {

  // YAML has its place, but that place is not my project
  eleventyConfig.setFrontMatterParsingOptions({
    language: "json", // default is "yaml"
  });

  //WebC is great
  eleventyConfig.addPlugin(pluginWebc, {
		components: "src/_includes/components/*.webc"
	});

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "webc",
    htmlTemplateEngine: "webc",
  };
}
