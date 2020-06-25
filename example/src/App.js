import ExampleComponent from "masspa-navigation";
import React, { Component } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "./img/home1.png";
import iconBack from "./img/rightArrow.svg";
import "./index.css";
const listNavigation = [
  {
    name: "Trang Chủ",
    subMenu: []
    // onClick: () => console.log("click")
  },
  {
    id: "5",
    name: "Dịch Vụ",
    // onClick: () => console.log("click")
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
      }
    ]
  },
  {
    name: "Sản Phẩm",
    subMenu: []
    // onClick: () => console.log("click")
  }
];
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
  }
];

export default class App extends Component {
  onClickSubNav = item => {
    console.log(item.name);
  };
  onClickNav = item => {
    console.log(item.name);
  };
  render() {
    return (
      <div className="root">
        <ExampleComponent
          logo={logo}
          listNavigation={listNavigation}
          iconBackNode={<img src={iconBack} className="menu_icon_back" />}
          listSocialNetwork={listSocialNetwork}
          funcNav={this.onClickNav}
          funcSubnav={this.onClickSubNav}
        />
      </div>
    );
  }
}
