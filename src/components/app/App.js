import React from "react";
import { MainWrap } from "./style";
import Header from "../header";
import Form from "../form";
export default function App() {
  return (
    <MainWrap>
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-3 col-md-6">
            <Header />
            <Form />
          </div>
        </div>
      </div>
    </MainWrap>
  );
}
