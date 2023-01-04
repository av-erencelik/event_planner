import { NextComponentType } from "next";
import React, { ReactElement } from "react";
import MainHeader from "./MainHeader";

const Layout = (props: { children: ReactElement }) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
