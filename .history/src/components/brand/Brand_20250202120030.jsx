import React from "react";
import {
  google,
  slack,
  atlasian,
  dropbox,
  shopify,
} from "./imports";

const Brand = () => {
  return <div className="gpt3__brand section__padding">
    <div><img src={google} alt="google" /></div>
  </div>;
};

export default Brand;
