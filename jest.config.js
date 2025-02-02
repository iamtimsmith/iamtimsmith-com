module.exports = {
	preset: "jest-preset-gatsby/typescript",
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/testPreprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/mocks/file-mock.js`,
	},
	moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
	moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
	setupFiles: [`<rootDir>/testLoaderShim.js`],
	setupFilesAfterEnv: ["<rootDir>/testSetup.js"],
}
