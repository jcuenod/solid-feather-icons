# Solid Feather Icons

## What is solid-feather-icons?

`solid-feather-icons` is a [`solid-js`](https://github.com/ryansolid/solid) wrapper around svg [Feather Icons](https://feathericons.com) based on `v4.28.0`. The icons provided are under the MIT license (as is this repository).

> Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.

## Installation

```
npm i solid-feather-icons --save
```

## Usage

```
import { Search as SearchIcon } from 'solid-feather-icons'

const SearchButton = ({caption}) =>
				<div>
								<SearchIcon />
								Search
				</div>
```

### Configuration Options:

| option | default | explanation |
| --- | --- | --- |
| size | 24 | The icons have square (24x24) viewboxes, this value sets the width and height of the svg. |
| color | "currentColor" | This can be an `rgb()` value or a hexadecimal value. The default 'currentColor' will use the inherited text `color`. |
| strokeWidth | 2 | The width of the svg stroke. |
