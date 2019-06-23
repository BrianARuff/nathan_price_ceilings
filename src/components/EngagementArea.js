import React from "react"
import { Link } from "gatsby"
import "./engagementArea.css";
import { hidden } from "ansi-colors";
import Image from "../images/logo.png"

const EngagementArea = () => {
  return (
    <div className="ea-home" >
      <img src={Image} className="hide" alt="engagement area logo" />
    </div>
  )
}

export default EngagementArea;