<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/styled-modern-normalize/develop/assets/banner.svg?sanitize=true"/></p>

<p align="center"><a href="https://github.com/sindresorhus/modern-normalize">modern-normalize.css</a> for <a href="https://www.styled-components.com">styled-components</a></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/styled-modern-normalize/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/styled-modern-normalize.svg?style=flat-square"/></a> <img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/styled-modern-normalize"><img src="https://img.shields.io/npm/v/styled-modern-normalize.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/styled-modern-normalize"><img src="https://img.shields.io/npm/dt/styled-modern-normalize.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/styled-modern-normalize"><img src="https://img.shields.io/npm/dm/styled-modern-normalize.svg?style=flat-square"/></a></p>

<p align="center"><a href="https://github.com/sindresorhus/modern-normalize"><img src="https://img.shields.io/badge/modern--normalize.css-0.5.0-5E81AC.svg?style=flat-square"/></a> <a href="https://www.styled-components.com"><img src="https://img.shields.io/badge/styled--components-v2_%7C%7C_v3_%7C%7C_v4-5E81AC.svg?style=flat-square"/></a></p>

# 0.2.0

![Release Date: 2018-12-01](https://img.shields.io/badge/Release_Date-2018--12--01-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/styled-modern-normalize/projects/4) [![Milestone](https://img.shields.io/badge/Milestone-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/styled-modern-normalize/milestone/2)

> Detailed information can be found in the [project documentation][docs].

### Features

❯ Updated to the latest [modern-normalize][gh-modern-normalize] upstream version [0.5.0][gh-modern-normalize-v0.5.0]. For details about included changes see the upstream repository and changelog. (#4 in PR #5, 08a48963, @azdanov)

❯ Added support for the latest [styled-components][] major version [4.x.x][gh-styled-components-v4.0.0] by adding instructions to the documentation how to use the styled with the new [`createGlobalStyle`][sc-docs-api-cgs] API function. (#6 in PR #7, cb3716c3, @azdanov)

Details about new awesome features and performance boosts can be found in the [announcement blog post][med-sc-announce-v4] and the [migration guide][sc-docs-migr-v4].

# 0.1.0

![Release Date: 2018-05-19](https://img.shields.io/badge/Release_Date-2018--05--19-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/styled-modern-normalize/projects/3) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/styled-modern-normalize/milestone/1)

> Detailed information can be found in the [project documentation][docs].

### Features

❯ Implemented the initial API for the CSS definitions based on [modern-normalize][gh-modern-normalize] version [0.4.0][npm-modern-normalize-v0.4.0].

The package exposes the following API exports. (#1 in PR #2, 8768a8f7)

* default export `modernNormalize`
* `MODERN_NORMALIZE_VERSION` to provide the currently supported _modern-normalize.css_ version
* both are also available as named exports

Detailed usage instructions can be found in the [usage documentation][docs-usage].

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord/develop/assets/banner-footer-mountains.svg?sanitize=true" /></p>

<p align="center">Copyright &copy; 2018-present Arctic Ice Studio & Sven Greb</p>

<p align="center"><a href="https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-5E81AC.svg?style=flat-square"/></a></p>

[docs]: https://github.com/arcticicestudio/styled-modern-normalize#readme
[docs-usage]: https://github.com/arcticicestudio/styled-modern-normalize#usage
[gh-modern-normalize]: https://github.com/sindresorhus/modern-normalize
[gh-modern-normalize-v0.5.0]: https://github.com/sindresorhus/modern-normalize/releases/tag/v0.5.0
[gh-styled-components-v4.0.0]: https://github.com/styled-components/styled-components/releases/tag/v4.0.0
[med-sc-announce-v4]: https://medium.com/styled-components/styled-components-v4-new-final-finalest-for-real-final-final-psd-fa4d83398a77
[npm-modern-normalize-v0.4.0]: https://www.npmjs.com/package/modern-normalize/v/0.4.0
[sc-docs-api-cgs]: https://www.styled-components.com/docs/api#createglobalstyle
[sc-docs-migr-v4]: https://www.styled-components.com/docs/faqs#what-do-i-need-to-do-to-migrate-to-v4
[styled-components]: https://www.styled-components.com
