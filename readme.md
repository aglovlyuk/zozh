# ZoЖ

### Common Information

#### Project Team

    - FED: Oleksii Glovliuk

#### Useful urls

- [styleguide]()
- [staging]()
- [live]()

##### Frontend

- NODEJS: v10.15.3
- NPM: v6.4.1
- Webpack v4.41.5
- SCSS v4.13.0
- [Editorconfig](.editorconfig)

### Frontend instructions

#### Installation
- Install [node](http://nodejs.org) -- if not yet installed
- go to the root of the project theme
- run `npm install` or `yarn`

#### Running
- go to the root of the project
- development build:
    - `npm run dev`
- production/final build (optimization, minification, etc):
    - `npm run build`
- run build and watcher:
    - `npm run watch`
- run livereload and watch:
    - `npm run start`

all settings can be viewed in webpack.config.js at the root directory

#### Style Files:
- main scss file:
    - `\src\scss\main.scss`
- typography settings:
    - `\src\scss\elements\_typography.scss`
- scss variables:
    - `\src\scss\core\_variables.scss`, etc
- scss mixins:
    - `\src\scss\core\_mixins.scss`

#### Main Mixins, Extends & Help Classes:
- Vertical & Horizontal alignments: `@mixin xycenter;`
- Vertical alignment: `@mixin ycenter;`
- Horizontal alignment: `@mixin xcenter;`
- Placeholder: `@mixin placeholder;`
- Font@face: `@mixin font-face;`
- Lists reset: `@extend %listreset;`

#### Breakpoints (used [Include Media library v1.4.9](https://include-media.com/)):

- phone: 530px
- phablet: 576px
- tablet: 768px
- desktop: 992px
- widescreen: 1200px
- largescreen: 1440px
- superscreen: 1800px
- megascreen: 2100px

Examples: `@include media('>=tablet') {}, @include media('<tablet') {}`

#### CSS
- svg icons save to folder
    - `\src\img\svg-icons`
- mobile-first for media queries, if possible
