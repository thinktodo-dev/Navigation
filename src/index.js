import React, { Component } from "react";
import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import classnames from "classnames";
import PropTypes from "prop-types";
// import styles from './styles.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { FaArrowAltCircleRight, FaAngleDown, FaAngleUp } from "react-icons/fa";

class ExampleComponent extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      collapse: [],
      isOpen: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  openMenu() {
    this.setState({
      isOpen: true
    });
  }
  closeMenu() {
    this.setState({
      isOpen: false
    });
  }
  handleOpenCollapes(code) {
    const collapse = this.state.collapse;
    if (collapse.indexOf(code) !== -1)
      collapse.splice(collapse.indexOf(code), 1);
    else collapse.push(code);
    this.setState(collapse);
  }

  handleClickNav = item => {
    if (item.onClick) item.onClick(item);
    else this.props.funcNav(item);
  };

  handleClickSubnav = item => {
    if (item.onClick) item.onClick(item);
    else this.props.funcSubnav(item);
  };

  renderSubListNavigation = (subList, parentIndex) => {
    const { collapse } = this.state;
    const { iconArrowDown, iconArrowUp, textColor } = this.props;
    return (
      <Collapse
        isOpen={collapse.indexOf(parentIndex) != -1}
        className="item_service_container"
      >
        {subList.map((item, index) => {
          return (
            <React.Fragment key={`sublist-${index}`}>
              <div
                // href="#"
                className="navbar_item_link_fixed item_link_width_left nav-link item-menu cursor-pointer"
                onClick={() => this.handleClickSubnav(item)}
              >
                <span
                  className=" item_link_width_left "
                  style={{ color: textColor }}
                >
                  {item.name}
                </span>
              </div>
              {typeof item.subMenu == "object" &&
                item.subMenu.isFulfilled &&
                item.subMenu.fulfillmentValue.length > 0 &&
                collapse.indexOf(`${parentIndex}-${index}`) != -1 && (
                  <span
                    className="item_link_width_right "
                    onClick={() =>
                      this.handleOpenCollapes(`${parentIndex}-${index}`)
                    }
                  >
                    {!iconArrowUp && <FaAngleUp className="w-50" />}
                    {iconArrowUp && iconArrowUp}
                  </span>
                )}
              {typeof item.subMenu == "object" &&
                item.subMenu.isFulfilled &&
                item.subMenu.fulfillmentValue.length > 0 &&
                collapse.indexOf(`${parentIndex}-${index}`) == -1 && (
                  <span
                    className="item_link_width_right"
                    onClick={() =>
                      this.handleOpenCollapes(`${parentIndex}-${index}`)
                    }
                  >
                    {!iconArrowDown && <FaAngleDown className="w-50" />}
                    {iconArrowDown && iconArrowDown}
                  </span>
                )}
              {typeof item.subMenu == "object" &&
                item.subMenu.isFulfilled &&
                item.subMenu.fulfillmentValue.length > 0 &&
                this.renderSubListNavigation(
                  item.subMenu.fulfillmentValue,
                  `${parentIndex}-${index}`
                )}
            </React.Fragment>
          );
        })}
      </Collapse>
    );
  };

  renderListNavigation = list => {
    const { collapse } = this.state;
    const { iconArrowDown, iconArrowUp, textColor } = this.props;
    return list.map((item, index) => {
      return (
        <NavItem className="navbar_item_fixed" key={`list-${index}`}>
          <div
            // href="#"
            className="navbar_item_link_fixed nav-link item_link_width_left cursor-pointer"
            onClick={() => this.handleClickNav(item)}
          >
            <span
              className="navbar_item_link_bottom"
              style={{ color: textColor }}
            >
              {item.name}
            </span>
          </div>
          {item.subMenu.length > 0 && collapse.indexOf(index) != -1 && (
            <span
              className="item_link_width_right "
              onClick={() => this.handleOpenCollapes(index)}
            >
              {!iconArrowUp && <FaAngleUp className="w-50" />}
              {iconArrowUp && iconArrowUp}
            </span>
          )}
          {item.subMenu.length > 0 && collapse.indexOf(index) == -1 && (
            <span
              className="item_link_width_right"
              onClick={() => this.handleOpenCollapes(index)}
            >
              {!iconArrowDown && <FaAngleDown className="w-50" />}
              {iconArrowDown && iconArrowDown}
            </span>
          )}
          {item.subMenu.length > 0 &&
            this.renderSubListNavigation(item.subMenu, index)}
        </NavItem>
      );
    });
  };

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
          <img
            src={logo}
            alt="kim spa massage làm đẹp"
            className="header_logo_03"
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav
              className={classnames("header_menu_fixed ", {
                left_slide: this.state.isOpen,
                right_slide: !this.state.isOpen
              })}
              style={backgroundColor && { backgroundColor: backgroundColor }}
              navbar
            >
              <NavItem className="navbar_item_fixed header_logo02_container">
                <NavLink href="/components/" className="p-0 ">
                  <img
                    src={logo}
                    alt="kim spa massage làm đẹp"
                    className="header_logo02"
                  />
                </NavLink>
              </NavItem>
              <NavItem className="navbar_icons_container">
                <button
                  className="btn_close_menu_header"
                  aria-label="close menu kim spa"
                  onClick={
                    onClickBackIcon
                      ? () => onClickBackIcon()
                      : () => this.closeMenu()
                  }
                >
                  {!iconBackNode && (
                    <FaArrowAltCircleRight className="menu_icon" />
                  )}
                  {iconBackNode && iconBackNode}
                </button>
                <div className="icons_brands_container">
                  {listSocialNetwork.map((item, index) => (
                    <NavLink
                      key={`nav-${index}`}
                      href={item.link}
                      className="icon_link"
                    >
                      {item.node}
                    </NavLink>
                  ))}
                </div>
              </NavItem>
              {this.renderListNavigation(listNavigation)}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
ExampleComponent.propTypes = {
  listNavigation: PropTypes.array,
  listSocialNetwork: PropTypes.array,
  logo: PropTypes.string,
  iconBackNode: PropTypes.node,
  iconArrowDown: PropTypes.node,
  iconArrowUp: PropTypes.node,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  funcNav: PropTypes.function,
  funcSubnav: PropTypes.function
};
ExampleComponent.defaultProps = {
  textColor: "#fff",
  listNavigation: [],
  listSocialNetwork: [],
  funcNav: () => console.log("click"),
  funcSubnav: () => console.log("click SubNav")
};
export default ExampleComponent;
