<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/styled-modern-normalize/develop/assets/banner.svg?sanitize=true"/></p>

<p align="center"><a href="https://github.com/sindresorhus/modern-normalize">modern-normalize.css</a> for <a href="https://www.styled-components.com">styled-components</a></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/styled-modern-normalize/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/styled-modern-normalize.svg?style=flat-square"/></a> <img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/styled-modern-normalize"><img src="https://img.shields.io/npm/v/styled-modern-normalize.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/styled-modern-normalize"><img src="https://img.shields.io/npm/dt/styled-modern-normalize.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/styled-modern-normalize"><img src="https://img.shields.io/npm/dm/styled-modern-normalize.svg?style=flat-square"/></a></p>

<p align="center"><img src="https://circleci.com/favicon.ico" width=24 height=24/> <a href="https://circleci.com/gh/arcticicestudio/styled-modern-normalize"><img src="https://img.shields.io/circleci/project/github/arcticicestudio/styled-modern-normalize/develop.svg?style=flat-square"/></a> <img src="https://cdn.travis-ci.org/images/favicon-c566132d45ab1a9bcae64d8d90e4378a.svg" width=24 height=24/> <a href="https://travis-ci.org/arcticicestudio/styled-modern-normalize"><img src="https://img.shields.io/travis/arcticicestudio/styled-modern-normalize/develop.svg?style=flat-square"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CHANGELOG.md#020"><img src="https://img.shields.io/badge/Changelog-0.2.0-5E81AC.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/styleguide-javascript"><img src="https://img.shields.io/badge/modern--normalize.css-0.5.0-5E81AC.svg?style=flat-square"/></a> <a href="https://www.styled-components.com"><img src="https://img.shields.io/badge/styled--components-v2_%7C%7C_v3_%7C%7C_v4-5E81AC.svg?style=flat-square"/></a></p>

A common import method for `modern-normalize.css` is to use [unnamed imports][mdn-import] which works fine for projects with _vanilla_ CSS or pre-processors workflows like Sass/Less and a bundler like [webpack][], but it doesn't make use of the advantages of CSS-in-JS libraries like _styled-components_, e.g. auto-prefixing and CSS optimizing.

[styled-modern-normalize][npm-styled-modern-normalize] is a proxy package of [modern-normalize.css][npm-modern-normalize] for [styled-components][] to provide the CSS as template literal with interpolation by using _styled-component_'s [`css`][sc-doc-api-css] API function. This allows to import and use it via [`injectGlobal`][sc-doc-api-injectglobal] or any other styled component.

The package is based on and compatible with _modern-normalize.css_ version 0.5.0. The provided styles are compatible with _styled-components_ v2, v3 and v4.

## Getting Started

### Installation

Add the package as dependency to your project:

```sh
npm install --save styled-modern-normalize
```

Run `npm install` from within the project root to bootstrap the project and install the development- and runtime dependencies. Note that **this will not install the required [styled-components][npm-styled-components]** package which is defined as [peer dependency][nodejs-blog-peerdeps] and must be installed separately as described in the [peer dependencies](#peer-dependencies) section below.

#### Peer Dependencies

This package uses [styled-components][npm-styled-components] API functions that return [React][] components.

Therefore this package depends on the [styled-components][npm-styled-components] and [react][npm-react] packages defined as [peer dependencies][nodejs-blog-peerdeps].

Linux & macOS users can easily install all peer dependencies by using the [npx][npm-npx] which comes prebundled with **npm 5** or higher:

```sh
npx install-peerdeps styled-modern-normalize
```

When using **npm < 5** the _npx_ tool is not prebundled, but users can either simply install it globally and then run the above command or install the [install-peerdeps][npm-install-peerdeps] package locally/globally to let it handle the installation of all peer dependencies.

```sh
# Via local installation…
npm install install-peerdeps
./node_modules/.bin/install-peerdeps styled-modern-normalize

# …or globally.
npm install -g install-peerdeps
install-peerdeps styled-modern-normalize
```

#### Manually

All peer dependencies can also be installed manually (e.g. for users running a Microsoft Windows based system) by installing the correct version of each package:

```sh
npm info "styled-modern-normalize@latest" peerDependencies
```

### Usage

_styled-modern-normalize_ can be used by importing the [default or named export][mdn-export] `modernNormalize`.

```js
// With default export…
import modernNormalize from "styled-modern-normalize";

// …or via named export.
import { modernNormalize } from "styled-modern-normalize";
```

To inject the styles when using _styled-components_ v4 the [`createGlobalStyle`][sc-doc-api-createglobalstyle] API function can be used that generates a `StyledComponent` Reach component:

```js
// Usage with the latest "styled-components" v4.
import { createGlobalStyle } from "styled-components";

const ModernNormalize = createGlobalStyle`
  ${modernNormalize}
  /* ... */
`;

// Use the generated component in your rendering logic to inject the styles.
/* ... */
<React.Fragment>
  <ModernNormalize />
</React.Fragment>;
/* ... */
```

When using _styled-components_ v2 or v3 the styles can be injected using the [`injectGlobal`][sc-doc-api-injectglobal] API:

```js
// Usage with "styled-components" v2 or v3.
import { injectGlobal } from "styled-components";

const cssBaseline = injectGlobal`
  ${modernNormalize}
  /* ... */
`;
```

The version of _modern-normalize.css_ this package is currently based is exported as `MODERN_NORMALIZE_VERSION`:

```js
import { MODERN_NORMALIZE_VERSION } from "styled-modern-normalize";

// Example:
console.log(MODERN_NORMALIZE_VERSION); // "0.5.0"
```

### Development Workflow

Run `npm install` from within the project root to bootstrap the project and install the development- and runtime dependencies. To start the development with automatic recompilation on any source file change in the `src/` directory run

```sh
npm run dev
```

The project is also configured for the opinionated code formatter [Prettier][] which provides [integration support for many editors][prettier-doc-editors] to e.g. automatically format the source file on save.

#### Building

A distribution build can be created by running

```sh
npm run dist
```

Continuous integration builds are running at [Circle CI][circle-ci] and [Travis CI][travis-ci].

#### Testing

##### Linting

JavaScript sources are linted with [ESLint][] using the [arcticicestudio-base][npm-eslint-config-arcticicestudio-base] configuration which can be run with

```sh
npm run lint:js
```

Markdown sources are linted with [remark-lint][npm-remark-lint] using the [arcticicestudio preset][npm-remark-preset-lint-arcticicestudio] which can be run with

```sh
npm run lint:md
```

All linting tasks can be run with

```sh
npm run lint
```

## Contributing

Read the [contributing guide][gh-contrib] to learn about the development process and how to propose [enhancement suggestions][gh-contrib-enhancements] and [report bugs][gh-contrib-bug-reports], how to [submit pull requests][gh-contrib-pr] and the project's [styleguides][gh-contrib-styleguides], [branch organization][gh-contrib-branch-org] and [versioning][gh-contrib-versioning] model.

The guide also includes information about [minimal, complete, and verifiable examples][gh-contrib-mcve] and other ways to contribute to the project like [improving existing issues][gh-contrib-improve-issues] and [giving feedback on issues and pull requests][gh-contrib-feedback].

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord/develop/assets/banner-footer-mountains.svg?sanitize=true" /></p>

<p align="center">Copyright &copy; 2018-present Arctic Ice Studio & Sven Greb</p>

<p align="center"><a href="https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-5E81AC.svg?style=flat-square"/></a></p>

[circle-ci]: https://circleci.com/gh/arcticicestudio/styled-modern-normalize
[eslint]: https://eslint.org
[gh-contrib]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md
[gh-contrib-branch-org]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#branch-organization
[gh-contrib-bug-reports]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#bug-reports
[gh-contrib-enhancements]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#enhancement-suggestions
[gh-contrib-feedback]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#give-feedback-on-issues-and-pull-requests
[gh-contrib-improve-issues]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#improve-issues
[gh-contrib-mcve]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#mcve
[gh-contrib-pr]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#pull-requests
[gh-contrib-styleguides]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#styleguides
[gh-contrib-versioning]: https://github.com/arcticicestudio/styled-modern-normalize/blob/develop/CONTRIBUTING.md#versioning
[mdn-export]: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
[mdn-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[nodejs-blog-peerdeps]: https://nodejs.org/en/blog/npm/peer-dependencies
[npm-eslint-config-arcticicestudio-base]: https://www.npmjs.com/package/eslint-config-arcticicestudio-base
[npm-install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
[npm-modern-normalize]: https://www.npmjs.com/package/modern-normalize
[npm-npx]: https://www.npmjs.com/package/npx
[npm-react]: https://www.npmjs.com/package/react
[npm-remark-lint]: https://www.npmjs.com/package/remark-lint
[npm-remark-preset-lint-arcticicestudio]: https://www.npmjs.com/package/remark-preset-lint-arcticicestudio
[npm-styled-components]: https://www.npmjs.com/package/styled-components
[npm-styled-modern-normalize]: https://www.npmjs.com/package/styled-modern-normalize
[prettier]: https://prettier.io/docs/en/editors
[prettier-doc-editors]: https://prettier.io/docs/en/editors
[react]: https://reactjs.org
[sc-doc-api-createglobalstyle]: https://www.styled-components.com/docs/api#createglobalstyle
[sc-doc-api-css]: https://www.styled-components.com/docs/api#css
[sc-doc-api-injectglobal]: https://www.styled-components.com/docs/api#injectglobal
[styled-components]: https://www.styled-components.com
[travis-ci]: https://travis-ci.org/arcticicestudio/styled-modern-normalize
[webpack]: https://webpack.js.org
