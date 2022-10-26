import styled from "styled-components";

export const FormWrapper = styled("div")`
  align-items: center;
  margin-top: 200px;
  // width: 50%;
`;

export const Content = styled("h1")`
  color: #404041;
  margin-bottom: 1em;
  font-weight: 600;
`;

export const FormInput = styled("div")`
  padding: 20px 0px 0px 0px;
`;

export const Button = styled.button`
  background: plum;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: ${p => p.valid ? "pointer" : "default"};
  margin-top: 0.75rem;
  margin-left: 1reml
  max-width: 180px;
  ${p => p.valid ? "&:hover { color: #fff; border: 1px solid rgb(255, 130, 92); background-color: rgb(255, 130, 92);}" : " " }
`;
  

export const ImageWrapper = styled("div")`
  margin-top: 50px;
`;

