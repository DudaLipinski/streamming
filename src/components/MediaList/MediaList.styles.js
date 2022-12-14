import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.blue};
  padding-top: 250px;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.img};);
  background-position: center;
  background-size: cover;
`;

export const Blur = styled.div`
  backdrop-filter: blur(10px);
  width: inherit;
  height: inherit;
  display: flex;
  height: inherit;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0 0;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.bigTitle};
  margin: 0;
  letter-spacing: -4px;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 55%);

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.big};
    letter-spacing: 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.white};
  width: 60%;
  min-height: 100px;

  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 28px;
  letter-spacing: 0.17em;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 55%);

  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const Rating = styled.div`
  display: flex;
  min-height: 30px;
`;

export const Star = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

export const WrapperButtons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Trailer = styled(Link)`
  color: ${(props) => props.theme.colors.blue};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 28px;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
  }
  &:active {
    color: ${(props) => props.theme.colors.white};
  }

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const Watch = styled.button`
  margin-right: 30px;
  display: inline-block;
  cursor: pointer;

  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.blue};
  padding: 14px 54px;

  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 600;
  text-decoration: none;
  text-shadow: 0px 1px 0px ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};

  :hover {
    background-color: ${(props) => props.theme.colors.blue};
  }

  :active {
    position: relative;
    top: 1px;
  }

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
    margin-right: 15px;
    padding: 10px 15px;
  }
`;

export const Heart = styled.img`
  cursor: pointer;
  width: 23px;
  height: auto;
  padding: 0 0 0 40px;
`;
