import styled from "styled-components";

export const HeaderSection = styled("header")`
  padding: 1em;
  display: flex;
  height: 60px;
  background-color: plum;
  width: 100vw;
`;

export const Label = styled("span")`
  font-weight: 900;
  color: #404041;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 20px;
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  align-items: right;
  justify-content: center;
  vertical-align: default;
  width: 100%;
`;

export const Button = styled("a")`
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  color: #404041;
  text-decoration: none;
  line-height: 27px;

  margin-right: 120px;
  margin-left: 80px;

  &:hover,
  &:active,
  &:focus {
    color: white;
    text-decoration: white wavy underline;
  }
`;

export const CurrentButton = styled("a")`
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  color: #404041;
  text-decoration: underline;
  line-height: 27px;

  margin-right: 120px;
  margin-left: 80px;

  &:hover,
  &:active,
  &:focus {
    color: white;
    text-decoration: white wavy underline;
  }
`;