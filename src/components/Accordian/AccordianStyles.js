import styled from "styled-components";

export const AccordianWrapper = styled("div")`
    max-width: 80%;
    margin: auto;
    border-top: 1px solid #fff;
`;

export const AccordianHeader = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background-color: plum;
    color: white;
    border-radius: 6px;
    padding: 10px;
    font-weight: 600;
    margin-top: 10px;

    &:hover {
        background-color: #ae59a4;
    }
`;

export const AccordianContent = styled("div")`
    width: 100%;
    padding: 25px;
    background-color: #fff;
    color: #404041;
`;

export const AccordianTitle = styled("span")`
    color: #404041;
    font-size: 23px;
`;