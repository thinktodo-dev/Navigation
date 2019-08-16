import React, { Component } from 'react'
import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import classnames from "classnames";
import PropTypes from 'prop-types'
// import styles from './styles.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import {
  FaArrowAltCircleRight,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa"
const menuServices = [
  {
    "id": "2eef8dbe-3725-4448-a83f-fac2ecc1cc94",
    "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    "name": "Nuôi Cấy Mô Da + Fillter ",
    "parentCode": "",
    "createdAt": 1564374853128,
    "updatedAt": 1564374853128,
    "subMenu": []
  },
  {
    "id": "6ad7b240-990c-400f-ab74-35c77be9ce2b",
    "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    "name": "Thư Giãn ",
    "parentCode": "",
    "createdAt": 1564374769795,
    "updatedAt": 1564374769795,
    "subMenu": {
      "isFulfilled": true,
      "isRejected": false,
      "fulfillmentValue": [
        {
          "id": "5a78a9fc-e286-488b-9d0f-75c71f70315f",
          "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
          "name": "Chăm Sóc Body",
          "parentCode": "6ad7b240-990c-400f-ab74-35c77be9ce2b",
          "createdAt": 1564381904891,
          "updatedAt": 1564381904891,
          "subMenu": []
        },
        {
          "id": "77340f06-f61a-4bfb-82a8-c44731ad0245",
          "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
          "name": "Chăm Sóc Da Mặt ",
          "parentCode": "6ad7b240-990c-400f-ab74-35c77be9ce2b",
          "createdAt": 1564381869522,
          "updatedAt": 1564381869522,
          "subMenu": []
        }
      ]
    }
  },
  {
    "id": "6c59db51-f1cd-4361-8fcb-7c0c41f23d64",
    "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    "name": "Dịch Vụ Đặc Biệt",
    "parentCode": "",
    "createdAt": 1564374784686,
    "updatedAt": 1564374784686,
    "subMenu": []
  },
  {
    "id": "7393451f-7553-48e4-a3d3-361df214d11c",
    "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    "name": "Điều Trị Da Chuyên Sâu",
    "parentCode": "",
    "createdAt": 1564374829307,
    "updatedAt": 1564374829307,
    "subMenu": []
  },
  {
    "id": "e2d02c1f-139f-4a36-9654-60c242e6271d",
    "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    "name": "Công Nghệ Cao",
    "parentCode": "",
    "createdAt": 1564374867945,
    "updatedAt": 1564901346702,
    "subMenu": []
  },
  {
    "id": "eecc722d-7692-44f1-9b75-f271c7ed92c7",
    "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    "name": "Tắm Trắng ",
    "parentCode": "",
    "createdAt": 1564374795222,
    "updatedAt": 1564374795222,
    "subMenu": []
  },
  {
    "id": "f0ea4e96-298c-46f5-99ae-f506103e7812",
    "serviceCode": "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    "name": "Giảm Béo ",
    "parentCode": "",
    "createdAt": 1564374810173,
    "updatedAt": 1564374810173,
    "subMenu": []
  }
]
const menuProducts = [
  {
    "id": "0",
    "serviceCode": "ql0va7MrHr",
    "name": "Chăm sóc da mặt",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": ""
  },
  {
    "id": "1",
    "serviceCode": "ql0va7MrHr",
    "name": "Chăm sóc cơ thể",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": ""
  },
  {
    "id": "2",
    "serviceCode": "ql0va7MrHr",
    "name": "Chăm sóc tóc",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": ""
  },
  {
    "id": "3",
    "serviceCode": "ql0va7MrHr",
    "name": "Thực phẩm chức năng",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": ""
  },
  {
    "id": "4",
    "serviceCode": "ql0va7MrHr",
    "name": "Kem dưỡng da",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": "0"
  },
  {
    "id": "5",
    "serviceCode": "ql0va7MrHr",
    "name": "Sữa rửa mặt",
    "createdAt": 1553508946956,
    "updatedAt": 1557054955610,
    "parent_id": "0"
  },
  {
    "id": "6",
    "serviceCode": "ql0va7MrHr",
    "name": "Tẩy tế bào chết",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": "0"
  },
  {
    "id": "7",
    "serviceCode": "ql0va7MrHr",
    "name": "Serum – Tinh chất dưỡng da",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": "0"
  },
  {
    "id": "8",
    "serviceCode": "ql0va7MrHr",
    "name": "Mặt nạ",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": "0"
  },
  {
    "id": "9",
    "serviceCode": "ql0va7MrHr",
    "name": "Kem chống nắng",
    "createdAt": 1553508946956,
    "updatedAt": 1557054955610,
    "parent_id": "0"
  },
  {
    "id": "10",
    "serviceCode": "ql0va7MrHr",
    "name": "Chăm sóc môi",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": "0"
  },
  {
    "id": "11",
    "serviceCode": "ql0va7MrHr",
    "name": "Kem dưỡng",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": "1"
  },
  {
    "id": "12",
    "serviceCode": "ql0va7MrHr",
    "name": "Tẩy tế bào chết",
    "createdAt": 1553508946956,
    "updatedAt": 1557054955610,
    "parent_id": "1"
  },
  {
    "id": "13",
    "serviceCode": "ql0va7MrHr",
    "name": "Sữa tắm",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": "1"
  },
  {
    "id": "14",
    "serviceCode": "ql0va7MrHr",
    "name": "Khử mùi",
    "createdAt": 1553508946956,
    "updatedAt": 1553508946956,
    "parent_id": "1"
  }
]

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }
  static defaultProps = {
    textColor: "#fff",
  }
  constructor(props) {
    super(props);
    this.state = {
      collapse: [],
      isOpen: false,
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  openMenu() {
    this.setState({
      isOpen: true,
    })
  }
  closeMenu() {
    this.setState({
      isOpen: false,
    })
  }   
  handleOpenCollapes(code) {
      const collapse = this.state.collapse;
      if(collapse.indexOf(code) !== -1) collapse.splice(collapse.indexOf(code), 1)
      else collapse.push(code);
      this.setState(collapse)
  }
  renderSubListNavigation = (subList, parentIndex) => {
      const {  collapse } = this.state;
      const {
        iconArrowDown,
        iconArrowUp,
        textColor
      } = this.props;      
      return(
        <Collapse
              isOpen={collapse.indexOf(parentIndex)!=-1}
              className="item_service_container"
            >
              {subList.map((item, index) => {
                return(
                  <React.Fragment key={`sublist-${index}`}>
                    <div
                      // href="#"
                      className="navbar_item_link_fixed item_link_width_left nav-link item-menu cursor-pointer"
                      onClick={() => item.onClick()}
                    >
                      <span className=" item_link_width_left " style={{color: textColor}}>
                        {item.name}
                      </span>
                    </div>
                    {((typeof item.subMenu == "object") && item.subMenu.isFulfilled && item.subMenu.fulfillmentValue.length>0 && collapse.indexOf(`${parentIndex}-${index}`)!=-1) && 
                      <span
                        className="item_link_width_right "
                        onClick={() => this.handleOpenCollapes(`${parentIndex}-${index}`)}
                      >
                        {!iconArrowUp && <FaAngleUp className="w-50"/>}
                        {iconArrowUp && iconArrowUp}  
                      </span>
                    }
                    {((typeof item.subMenu == "object") && item.subMenu.isFulfilled && item.subMenu.fulfillmentValue.length>0 && collapse.indexOf(`${parentIndex}-${index}`)==-1) && 
                      <span
                        className="item_link_width_right"
                        onClick={() => this.handleOpenCollapes(`${parentIndex}-${index}`)}
                      >
                        {!iconArrowDown && <FaAngleDown className="w-50"/>}
                        {iconArrowDown && iconArrowDown}
                      </span>
                    }
                    {(typeof item.subMenu == "object") && item.subMenu.isFulfilled && item.subMenu.fulfillmentValue.length>0 && this.renderSubListNavigation(item.subMenu.fulfillmentValue, `${parentIndex}-${index}`)}
                  </React.Fragment>
                )
              })}
        </Collapse>
      )
  }

  renderListNavigation = (list) => {
    const {  collapse } = this.state;
    const {
      iconArrowDown,
      iconArrowUp,
      textColor
    } = this.props;
    return list.map((item, index) => {      
      return(
        <NavItem className="navbar_item_fixed" key={`list-${index}`}>
          <div
            // href="#"
            className="navbar_item_link_fixed nav-link item_link_width_left cursor-pointer"
            onClick={() => item.onClick()}
          >
            <span className="navbar_item_link_bottom" style={{color: textColor}}>
              {item.name}
            </span>
          </div>
          {(item.subMenu.length>0 && collapse.indexOf(index)!=-1) && 
            <span
              className="item_link_width_right "
              onClick={() => this.handleOpenCollapes(index)}
            >
              {!iconArrowUp && <FaAngleUp className="w-50"/>}
              {iconArrowUp && iconArrowUp}              
            </span>
          }
          {(item.subMenu.length>0 && collapse.indexOf(index)==-1) && 
            <span
              className="item_link_width_right"
              onClick={() => this.handleOpenCollapes(index)}
            >
              {!iconArrowDown && <FaAngleDown className="w-50"/>}
              {iconArrowDown && iconArrowDown}
            </span>
          }
          {item.subMenu.length>0 && this.renderSubListNavigation(item.subMenu, index)}
        </NavItem>
      )
    })
}

  render() {
    const {
      logo,
      listNavigation,
      iconBackNode,
      onClickBackIcon,
      listSocialNetwork,
      backgroundColor
    } = this.props;
    
    return (
      <Navbar
        light
        expand="md"
        className="header_fixed_mobile p-0 navbar_container_fixed fixed-top"
      >
        <Container className="p-0 header_fixed flex-row-reverse">
          <NavbarToggler
            onClick={this.openMenu}
            className="navbar_toller_fixed"
            role="button"
            aria-label="open menu kim spa"
          />
          <img src={logo}
            alt="kim spa massage làm đẹp"
            className="header_logo_03"
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav
              className={classnames("header_menu_fixed ", {
                left_slide: this.state.isOpen,
                right_slide:!this.state.isOpen,
              })}
              style={backgroundColor && {backgroundColor: backgroundColor}}
              navbar
            >
              <NavItem className="navbar_item_fixed header_logo02_container">
                <NavLink href="/components/" className="p-0 ">
                  <img src={logo}
                    alt="kim spa massage làm đẹp"
                    className="header_logo02"
                  />
                </NavLink>
              </NavItem>
              <NavItem className="navbar_icons_container">
                <button
                  className="btn_close_menu_header"
                  aria-label="close menu kim spa"
                  onClick={onClickBackIcon? () => onClickBackIcon(): () => this.closeMenu()}
                >
                  {!iconBackNode && <FaArrowAltCircleRight className="menu_icon"/>}
                  {iconBackNode && iconBackNode}
                </button>
                <div className="icons_brands_container">
                  {listSocialNetwork.map((item, index) => 
                    <NavLink
                      href={item.link}
                      className="icon_link"
                    >
                      {item.node}
                    </NavLink>
                  )}
                </div>
              </NavItem>
              {this.renderListNavigation(listNavigation)}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
