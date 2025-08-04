import React, { Component } from "react";
import styled from "../main.module.css";
import Benefits from "./Benefits";
import Slider from "./Slider";
import IntroductionAboutUs from "./IntroductionAboutUs";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <IntroductionAboutUs />
          <div style={{ width: "100%" }}>
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}
