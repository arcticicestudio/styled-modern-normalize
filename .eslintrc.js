/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    styled-modern-normalize
 * Repository: https://github.com/arcticicestudio/styled-modern-normalize
 * License:    MIT
 */

/**
 * @file The ESLint configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 */

const path = require("path");

module.exports = {
  extends: "arcticicestudio-base",
  plugins: ["prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
