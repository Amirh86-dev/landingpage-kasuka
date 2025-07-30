import React, { Component } from "react";
import styled from "./header.module.css";
import InfoBoxContainer from "./InfoBoxContainer";

export default class Header extends Component {
  render() {
    return (
      <header>
        <section className={styled.secHeader}>
          <div className={styled.grayFilter}>
              <h1 className={styled.headTitr}>
                <span>راه حل های قدرتمند دیجیتال با</span>
                <br />
                <span className="text-orange">Kasuka</span>
              </h1>
              <h3 className={styled.lessTitr}>
                ما تیمی از بازاریابان با استعداد دیجیتال هستیم
              </h3>
              <div>
                <InfoBoxContainer />
              </div>
          </div>
        </section>
      </header>
    );
  }
}
