import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state={
    isOpen:false
  }

  handleToogle = ()=>{
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return <nav className="navbar">navbar</nav>;
  }
}

export default Navbar;
