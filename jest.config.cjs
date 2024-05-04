module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  preset: null,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
