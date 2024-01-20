import React from "react";
import styled, { keyframes, css } from "styled-components";
import firstLogo from '../assests/brands/renukiran.svg'
import secondLogo from '../assests/brands/2.svg'
import thirdLogo from '../assests/brands/3.svg'
import fourthLogo from '../assests/brands/4.svg'
import fifthLogo from '../assests/brands/5.svg'
import seventhLogo from '../assests/brands/7.svg'


function ParnersOfTaba() {
  const row1 = [
    firstLogo,
    secondLogo,
    thirdLogo,
    fourthLogo,
    fifthLogo,
    seventhLogo
  ];

  const row2 = [
    firstLogo,
    secondLogo,
    thirdLogo,
    fourthLogo,
    fifthLogo,
    seventhLogo
  ];

  return (
    <AppContainer>
      <Wrapper>
      {/* <Note>
              Our Partners
            </Note> */}
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default ParnersOfTaba;

const AppContainer = styled.div`
  width: 100vw;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
    font-size: 1.75rem; /* Equivalent to text-2xl in Tailwind */
    font-family: "Redhat", sans-serif;
    line-height: 1.5; /* Equivalent to leading-9 in Tailwind */
    color: #ffffff; /* Equivalent to text-white in Tailwind */
    margin-bottom: 1.5rem;
    text-align: start; 
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
  
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color:white;
`;