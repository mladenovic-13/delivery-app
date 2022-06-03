import Image from "next/image";
import tw from "twin.macro";
import styled from "styled-components";
import React, { useState } from "react";

const FeaturedContainer = styled.div`
  height: calc(100vh - 96px);
  background-color: #ce2432;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;
const ArrowContainer = tw.div`absolute w-24 h-24 top-0 bottom-0 m-auto cursor-pointer z-50`;
const ImgWrapper = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in-out;
`;
const ImgContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
`;

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured2.png",
    "/img/featured.png",
    "/img/featured3.png",
  ];

  const handleArrow = (side) => {
    if (side === "l") {
      if (index !== 0) {
        setIndex(index - 1);
      } else {
        setIndex(images.length - 1);
      }
    }
    if (side === "r") {
      if (index !== images.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
  };

  return (
    <div>
      <FeaturedContainer>
        <ArrowContainer style={{ left: 0 }} onClick={() => handleArrow("l")}>
          <Image src="/img/arrowl.png" alt="" layout="fill" />
        </ArrowContainer>
        <ImgWrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
          {images.map((img, i) => (
            <ImgContainer key={i}>
              <Image src={img} alt="" layout="fill" objectFit="contain" />
            </ImgContainer>
          ))}
        </ImgWrapper>
        <ArrowContainer style={{ right: 0 }} onClick={() => handleArrow("r")}>
          <Image src="/img/arrowr.png" alt="" layout="fill" />
        </ArrowContainer>
      </FeaturedContainer>
    </div>
  );
};

export default Featured;
