import React, { Component } from "react";
import styled from "./header.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className={styled.parent}>
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
