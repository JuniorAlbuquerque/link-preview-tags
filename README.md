
# link-preview-tags

## Install

```sh
yarn add link-preview-tags
```

## Usage

```ts
import { getLinkData } from 'link-preview-tags';

// example using my website
getLinkData('https://jnr.vercel.app/')

{
  description: 'My personal website',
  image: 'https://user-images.githubusercontent.com/42422605/177070433-bccd0d3e-c1d1-4c0f-871a-60c1aa8cf23b.png',
  title: 'Jnr Website',
  url: 'https://jnr.vercel.app/'
}

```