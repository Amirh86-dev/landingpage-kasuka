import React, { Component } from "react";
import styled from "./header.module.css";
import { FiDatabase } from "react-icons/fi";
import InfoBox from "./InfoBox";

export default class InfoBoxContainer extends Component {
  render() {
    return (
      <div className={styled.infoBoxContainer}>
        <InfoBox icon={<FiDatabase size={32} />} title="اطلاعات ذخیره شده" />
        <InfoBox icon={<FiDatabase size={32} />} title="اطلاعات ذخیره شده" />
        <InfoBox icon={<FiDatabase size={32} />} title="اطلاعات ذخیره شده" />
        <InfoBox icon={<FiDatabase size={32} />} title="اطلاعات ذخیره شده" />
        <InfoBox icon={<FiDatabase size={32} />} title="اطلاعات ذخیره شده" />
      </div>
    );
  }
}
