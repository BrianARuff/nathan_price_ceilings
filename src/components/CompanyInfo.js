import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../images/henry-co-180108-unsplash.jpg"

import "./companyInfo.css";

const CompanyInfo = () => {
  return (
    <div className="flex-col-2">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis facilis
        aliquam consectetur cupiditate id, praesentium quibusdam fugit placeat
        hic veritatis, maiores nihil temporibus, aut porro perspiciatis
        accusamus explicabo ratione voluptatem?
      </p>
      <img src={Image} alt="Man painting Ceiling" />
    </div>
  )
}

export default CompanyInfo
