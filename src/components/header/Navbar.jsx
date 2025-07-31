import React, { Component } from "react";
import styled from "./header.module.css";

export default class Navbar extends Component {
  state = {
    scroll: false,
  };

  scrollHandler = () => {
    if (window.scrollY >= 50) {
      this.setState({ scroll: true });
    } else {
      this.setState({ scroll: false });
    }
  };

  render() {
    console.log(window.scrollY);

    window.addEventListener("scroll", this.scrollHandler);
    return (
      <div
        className={styled.parent}
        style={{
          backgroundColor: this.state.scroll
            ? "rgba(0, 0, 0, .75)"
            : "transparent",
        }}
      >
        <div className={`container ${styled.parentWrraper}`}>
          <a href="" className={styled.btnSecStart}>
            شروع
          </a>
          <nav>
            <ul className={styled.menu}>
              <li>
                <a href="">خانه</a>
              </li>
              <li>
                <a href="">درباره ی ما</a>
              </li>
              <li>
                <a href="">خدمات</a>
              </li>
              <li>
                <a href="">نمونه کارها</a>
              </li>
              <li>
                <a href="">تیم</a>
              </li>
              <li>
                <a href="">لیست کشویی</a>
              </li>
              <li>
                <a href="">تماس با ما</a>
              </li>
            </ul>
          </nav>
          <div className={styled.logoSec}>
            <h1 className={styled.headerTitle}>Kasuka</h1>
            <img
              src="assets/images/logo.png"
              alt=""
              className={styled.logoImg}
            />
          </div>
        </div>
      </div>
    );
  }
}
