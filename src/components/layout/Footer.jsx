import Image from "next/image";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: calc(100vh - 100px);
  background-color: #222;
  display: flex;

  @media screen and (max-width: 480px) {
    height: auto;
    text-align: center;
  }
`;
const FooterItem = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  &:last-child {
    flex: 2;
    padding: 50px;
    justify-content: space-between;
  }

  @media screen and (max-width: 480px) {
    &:first-child {
      display: none;
    }
    flex-direction: column;
  }
`;

const FooterCard = styled.div``;
const CardMotto = tw.h2`hidden md:block text-3xl font-bold text-gray-300 w-3/12`;
const CardTitle = tw.h1`text-3xl md:text-xl font-bold text-yellow-600`;
const CardText = tw.p`text-2xl text-gray-200 py-3`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
      </FooterItem>
      <FooterItem>
        <CardMotto>OH YES, WE DID IT. WELL BAKED SLICE OF PIZZA</CardMotto>
        <FooterCard>
          <CardTitle>FIND OUR RESTAURANTS</CardTitle>
          <CardText>
            Save Kovacevica 31/4
            <br /> Pirot, Srbija
            <br />
            066/322-413
          </CardText>
          <CardText>
            Save Kovacevica 31/4
            <br /> Pirot, Srbija
            <br />
            066/322-413
          </CardText>
          <CardText>
            Save Kovacevica 31/4
            <br /> Pirot, Srbija
            <br />
            066/322-413
          </CardText>
        </FooterCard>
        <FooterCard>
          <CardTitle>WORKING HOURS</CardTitle>
          <CardText>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </CardText>
          <CardText>
            SATURDAY - SUNDAY
            <br />
            12:00 - 24:00
          </CardText>
        </FooterCard>
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;
