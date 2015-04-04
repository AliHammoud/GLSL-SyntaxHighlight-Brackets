var LanguageManager = brackets.getModule("language/LanguageManager");

LanguageManager.defineLanguage("GLSL", {
    name: "GLSL",
    mode: "GLSL",
    fileExtensions: ["GLSL"],
    blockComment: ["/*", "*/"],
    lineComment: ["//"]
});