# Vue3 Masonry CSS

<p align="left">
  <a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/vue3-masonry-css"><img alt="npm" src="https://img.shields.io/npm/v/vue3-masonry-css.svg?logo=npm&logoColor=CB3837&color=CB3837&style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/vue3-masonry-css"><img alt="Downloads" src="https://img.shields.io/npm/dm/vue3-masonry-css.svg?style=for-the-badge&color=4CAF50&logo=npm"></a>
  <a href="https://github.com/tobiaswaelde/vue3-masonry-css/actions/workflows/test-build.yml"><img alt="Build" src="https://img.shields.io/github/actions/workflow/status/tobiaswaelde/vue3-masonry-css/test-build.yml?label=build&logo=github&style=for-the-badge"></a>
  <a href="https://github.com/tobiaswaelde/vue3-masonry-css/actions/workflows/npm-publish.yml"><img alt="Publish" src="https://img.shields.io/github/actions/workflow/status/tobiaswaelde/vue3-masonry-css/npm-publish.yml?label=publish&logo=github&style=for-the-badge"></a>
</p>

A lightweight and customizable Masonry Grid component for [Vue](https://vuejs.org/), powered by native CSS columns.
Perfect for building responsive, gap-free layouts — with zero dependencies and full control over structure, styling, and breakpoints.

## 📚 Table of Contents <!-- omit in toc -->

- [✨ Features](#-features)
- [❓ Why Vue3 Masonry CSS?](#-why-vue3-masonry-css)
- [📦 Installation](#-installation)
- [🚀 Basic Usage](#-basic-usage)
- [⚙️ Props](#️-props)

## ✨ Features

- 🧱 Simple Masonry Layout using CSS columns
- 🎯 Responsive column & gutter configuration with breakpoints
- 💅 Built-in styling (or fully customizable)
- 🧩 Flexible tag and class configuration for all levels
- 💨 Lightweight and dependency-free
- ⚙️ Fully compatible with Vue 3 Composition API + TypeScript

## ❓ Why Vue3 Masonry CSS?

Unlike JavaScript-heavy masonry libraries, `vue3-masonry-css` uses native CSS columns, offering a lightweight, dependency-free layout solution that's:
- 🧱 Fully responsive — adapts to any screen size with breakpoint support
- 🎨 Easy to customize — tag names, classes, and attributes are fully configurable
- ⚡ Fast to render — no layout shift, thanks to pure CSS-based rendering
- 🪶 Lightweight — no dependencies, no runtime overhead
- 🛠️ Dev-friendly — built with TypeScript and Vue 3 Composition API
- 🧩 Flexible — works with any child components or elements you provide

## 📦 Installation
#### Install using yarn
```sh
yarn add vue3-masonry-css
```

#### Install using NPM
```sh
npm install --save vue3-masonry-css
```

## 🚀 Basic Usage
```vue
<template>
  <MasonryGrid 
    :columns="{ default: 4, 1024: 3, 768: 2, 480: 1 }"
    :gutter="'1rem'"
  >
    <MasonryGridItem>
      <Component1 />
    </MasonryGridItem>
    <MasonryGridItem>
      <Component2 />
    </MasonryGridItem>
    <MasonryGridItem>
      <Component3 />
    </MasonryGridItem>
  </MasonryGrid>
</template>

<script setup lang="ts">
import { MasonryGrid, MasonryGridItem } from 'vue3-masonry-css';
</script>
```

## ⚙️ Props

| Prop                          | Type                                                   | Default     | Description                                                           |
| ----------------------------- | ------------------------------------------------------ | ----------- | --------------------------------------------------------------------- |
| [`columns`](#columns)         | `number \| Record<number, number>`                     | `2`         | Static or responsive column count.                                    |
| [`gutter`](#gutter)           | `number \| string \| Record<number, number \| string>` | `0`         | Define static gutter width or dynamic gutter width using breakpoints. |
| [`css`](#css)                 | `boolean`                                              | `true`      | Set to `false` if you want to use custom styling.                     |
| [`tag`](#tag)                 | `string`                                               | `'div'`     | The HTML tag name of the container element.                           |
| [`class`](#class)             | `any`                                                  | `undefined` | Custom class of the container element.                                |
| [`columnTag`](#columnTag)     | `string`                                               | `'div'`     | The HTML tag name of the column element.                              |
| [`columnClass`](#columnClass) | `any`                                                  | `undefined` | Custom class of the column element.                                   |
| [`columnAttr`](#columnAttr)   | `any`                                                  | `undefined` | Custom attributes of the column element.                              |
| [`childTag`](#childTag)       | `string`                                               | `'div'`     | The HTML tag name of the child element.                               |
| [`childClass`](#childClass)   | `any`                                                  | `undefined` | Custom class of the child element.                                    |
| [`childAttr`](#childAttr)     | `any`                                                  | `undefined` | Custom attributes of the child element.                               |

### columns <!-- omit in toc -->
Define static column count or dynamic column count using breakpoints.

##### Static column count
```vue
<masonry :cols="3">...</masonry>
```

##### Dynamic column count
```vue
<masonry :cols="{ default: 4, 1920: 3, 1366: 2, 1280: 1 }">...</masonry>
```

### gutter <!-- omit in toc -->
Define static gutter width or dynamic gutter width using breakpoints.

The value can be a number (e.g. `10` for `10px`) or a string value (e.g. `10px` or `2rem`).

##### Static gutter width
```vue
<masonry :gutter="10">...</masonry>
<masonry :gutter="'2rem'">...</masonry>
```

##### Dynamic gutter width
```vue
<masonry :gutter="{ default: 50, 1920: '30px', 1366: '2rem' }">...</masonry>
```

### css <!-- omit in toc -->
Set to `false` if you want to use custom styling.

Default: `true`

### tag <!-- omit in toc -->
The HTML tag name of the container element.

Default: `'div'`

### class <!-- omit in toc -->
Custom class of the container element.

Default: `undefined`

### columnTag <!-- omit in toc -->
The HTML tag name of the column element.

Default: `'div'`

### columnClass <!-- omit in toc -->
Custom class of the column element.

Default: `undefined`

### columnAttr <!-- omit in toc -->
Custom attributes of the column element.

Default: `undefined`

### childTag <!-- omit in toc -->
The HTML tag name of the child element.

Default: `'div'`

### childClass <!-- omit in toc -->
Custom class of the child element.

Default: `undefined`

### childAttr <!-- omit in toc -->
Custom attributes of the child element.

Default: `undefined`


## 🤝 Contributing <!-- omit in toc -->

Contributions, issues, and feature requests are welcome!  
Feel free to check [issues](https://github.com/tobiaswaelde/vue3-simple-lightbox/issues) and open a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/something`)
3. Commit your changes
4. Push to the branch
5. Open a PR

## 📝 License <!-- omit in toc -->

Released under the [MIT License](./LICENSE)  
© [Tobias Wälde](https://github.com/tobiaswaelde)