module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-undef": "off", //未定义变量
    "no-unused-vars": "off", //定义了但未使用的变量
    "no-redeclare": "off", //重复声明的变量
    "no-empty": "off", //块语句中的内容不能为空
    "@typescript-eslint/no-var-requires": 0
  }
};
