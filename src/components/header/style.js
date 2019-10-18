import styled from "styled-components";
const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  line-height: 64px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
const StepWrap = styled.div`
  max-width: 492px;
  width: 100%;
  margin: 20px auto 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StepItem = styled.span`
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background-color: ${({ active }) => (active ? "#DA3F5B" : "#1E34A5")};
`;
const StepLine = styled.span`
  width: 100%;
  height: 2px;
  background-color: #e8e8e8;
  margin: 0 8px;
`;

export { StepWrap, StepItem, StepLine, Title };
