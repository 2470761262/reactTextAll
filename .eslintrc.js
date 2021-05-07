module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [ "@vue/prettier"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-unused-vars": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
