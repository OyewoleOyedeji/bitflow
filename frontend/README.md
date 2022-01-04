# Bitflow

[![CodeQL](https://github.com/OyewoleOyedeji/bitflow/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/OyewoleOyedeji/bitflow/actions/workflows/codeql-analysis.yml)

Bootstrap 4 design for a online tech startup company

## Setting up

```bash
# Install dependencies
$ npm install

# Start development server at 0.0.0.0:3000
$ npm run dev
```

## Running production build

```bash
# Build the project, generate the assets and start production server
$ npm run build
$ npm run generate

# It listens on 0.0.0.0:3000
$ npm run start
```

## Other Scripts

```bash
# Minify and optimize the css assets found in raw/css/
$ npm run optimize:css

# Lint javascript files not in .gitignore using eslint
$ npm run lint
$ npm run lint:js

# Custom command for Vercel deployment
$ npm run build:vercel
```

## Deployment

It is done automatically when changes are pushed/merged to `main` branch

[![Powered by Vercel](https://raw.githubusercontent.com/abumalick/powered-by-vercel/master/powered-by-vercel.svg)](https://vercel.com?utm_source=powered-by-vercel)
