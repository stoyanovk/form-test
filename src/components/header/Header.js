import React from "react";
import { StepWrap, StepItem, StepLine,Title } from "./style";
export default function Header() {
  return (
    <>
      <Title className="title">Your first project</Title>
      <StepWrap>
        <StepItem children={1} />
        <StepLine />
        <StepItem children={2} />
        <StepLine />
        <StepItem active={true} children={3} />
      </StepWrap>
    </>
  );
}
