module.exports.config = {
    markdownTemplateEngine: "html",
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("projects");
};