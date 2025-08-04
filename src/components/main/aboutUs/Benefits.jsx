import React, { Component } from 'react'
import { IoCheckmarkDone } from 'react-icons/io5'
import styled from '../main.module.css'

export default class Benefits extends Component {
  render() {
    return (
        <div className={styled.benefitDesc}>
            <span className={styled.benefitDescIcon}><IoCheckmarkDone /></span>
            <span>{this.props.text}</span>
        </div>
    )
  }
}
