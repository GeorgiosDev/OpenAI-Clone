import React from "react";
import { google, slack, atlasian, dropbox, shopify } from "./";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div><img src={google} alt="google" /></div>
      <div><img src={slack} alt="slack" /></div>
      <div><img src={atlasian} alt="atlasian" /></div>
      <div><img src={dropbox} alt="dropbox" /></div>
      <div><img src={shopify} alt="shopify" /></div>
    </div>
  );
};

export default Brand;
