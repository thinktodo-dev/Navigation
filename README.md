# masspa-navigation

> 

[![NPM](https://img.shields.io/npm/v/masspa-navigation.svg)](https://www.npmjs.com/package/masspa-navigation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
Masspa package to make menu navigation

## Install

```bash
npm install --save masspa-navigation
```

## Usage

```jsx
import React, { Component } from 'react'

import MasspaNavigation from 'masspa-navigation'

class Example extends Component {
  render () {
    return (
      <MasspaNavigation />
    )
  }
}
```

## Properties

| Prop                      | Description                                                                                                                                                                                                                                                                                                             | Default        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`listNavigation`**               | List item to show in navigation                                                                                                                                                                                                                                         | `[]`          |
| **`listSocialNetwork`**               | List social icon to show in navigation                                                                                                                                                                                                                                         | `[]`          |
| **`logo`**               | Logo to show in top header                                                                                                                                                                                                                                         | `Masspa Logo`          |
| **`iconBackNode`**               | Node back icon in navigation                                                                                                                                                                                                                                        | `<FaArrowAltCircleRight/>`          |
| **`iconArrowDown`**               | Node icon collapse down in navigation                                                                                                                                                                                                                                        | `<FaAngleDown/>`          |
| **`iconArrowUp`**               | Node icon collapse up in navigation                                                                                                                                                                                                                                        | `<FaAngleUp/>`          |
| **`textColor`**               | Color text                                                                                                                                                                                                                                         | `#FFFFFF`          |
| **`backgroundColor`**               | Color background                                                                                                                                                                                                                                        | `rgba(40, 24, 15, 0.8)`          |


## Example

Check full example in the `Example` folder.

```js
import React, { Component } from 'react';
import MasspaNavigation from 'masspa-navigation';
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaAngleDoubleDown,
  FaAngleDoubleUp,
} from "react-icons/fa";
import logo from './img/home1.png';

const listNavigation = [
  {
    name: 'Trang Chủ',
    subMenu: [],
    onClick: () => console.log('click')
  },
  {
    id: '5',
    name: 'Dịch Vụ',
    subMenu: [
      {
        id: "2eef8dbe-3725-4448-a83f-fac2ecc1cc94",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        name: "Nuôi Cấy Mô Da + Fillter ",
        parentCode: "",
        createdAt: 1564374853128,
        updatedAt: 1564374853128,
        subMenu: []
      },
      {
        id: "6ad7b240-990c-400f-ab74-35c77be9ce2b",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        name: "Thư Giãn ",
        parentCode: "",
        createdAt: 1564374769795,
        updatedAt: 1564374769795,
        subMenu: {
          isFulfilled: true,
          isRejected: false,
          fulfillmentValue: [
            {
              id: "5a78a9fc-e286-488b-9d0f-75c71f70315f",
              serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
              name: "Chăm Sóc Body",
              parentCode: "6ad7b240-990c-400f-ab74-35c77be9ce2b",
              createdAt: 1564381904891,
              updatedAt: 1564381904891,
              subMenu: {
                isFulfilled: true,
                isRejected: false,
                fulfillmentValue: [
                  {
                    id: "5a78a9fc-e286-488b-9d0f-75c71f70315f",
                    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
                    name: "Chăm Sóc Toàn thân",
                    parentCode: "6ad7b240-990c-400f-ab74-35c77be9ce2b",
                    createdAt: 1564381904891,
                    updatedAt: 1564381904891,
                    subMenu: {
                      isFulfilled: true,
                      isRejected: false,
                      fulfillmentValue: [
                        {
                          id: "5a78a9fc-e286-488b-9d0f-75c71f70315f",
                          serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
                          name: "Chăm Sóc Toàn thân",
                          parentCode: "6ad7b240-990c-400f-ab74-35c77be9ce2b",
                          createdAt: 1564381904891,
                          updatedAt: 1564381904891,
                          subMenu: []
                        }
                      ]
                    }
                  },
                  {
                    id: "77340f06-f61a-4bfb-82a8-c44731ad0245",
                    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
                    name: "Massage toàn thân",
                    parentCode: "6ad7b240-990c-400f-ab74-35c77be9ce2b",
                    createdAt: 1564381869522,
                    updatedAt: 1564381869522,
                    subMenu: []
                  }
                ]
              }
            },
            {
              id: "77340f06-f61a-4bfb-82a8-c44731ad0245",
              serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
              name: "Chăm Sóc Da Mặt ",
              parentCode: "6ad7b240-990c-400f-ab74-35c77be9ce2b",
              createdAt: 1564381869522,
              updatedAt: 1564381869522,
              subMenu: []
            }
          ]
        }
      },
      {
        id: "6c59db51-f1cd-4361-8fcb-7c0c41f23d64",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        name: "Dịch Vụ Đặc Biệt",
        parentCode: "",
        createdAt: 1564374784686,
        updatedAt: 1564374784686,
        subMenu: []
      },
    ],
    onClick: () => console.log('click')
  },
  {
    name: 'Sản Phẩm',
    subMenu: [],
    onClick: () => console.log('click')
  },
]
const listSocialNetwork = [
  {
    node: <FaFacebookSquare className="menu_icon" />,
    link: "https://www.facebook.com/kimspa185/"
  },
  {
    node: <FaTwitter className="menu_icon" />,
    link: "https://twitter.com/?lang=vi"
  },
  {
    node: <FaInstagram className="menu_icon" />,
    link: "https://www.instagram.com/"
  },
]

class AccordionView extends Component {
  state = {
    activeSections: [],
  };


  render() {
    return (
        <ExampleComponent 
          logo={logo}
          listNavigation={listNavigation}
          listSocialNetwork={listSocialNetwork}
          iconBackNode={<img src={iconBack} className="menu_icon_back"/>}
          textColor="#9CDCFE"
          backgroundColor='rgb(40, 24, 15)'
          iconArrowDown={<FaAngleDoubleDown className="w-50"/>}
          iconArrowUp={<FaAngleDoubleUp className="w-50"/>}
        />
    );
  }
}
```

## Demo

![demo](https://raw.githubusercontent.com/thinktodo-dev/Navigation/master/example/ezgif-3-8bef78596dda.gif)

## License

MIT © [maitrucquynhq111](https://github.com/maitrucquynhq111)
