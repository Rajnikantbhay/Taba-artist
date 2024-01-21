import { CardDefault } from "./Cards";
import { movingCarouselData } from '../data';
import styled, { keyframes } from "styled-components";



const AppContainer = styled.div`
  width: 100vw;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const CarouselTrack = styled.div`
flex-shrink: 0;
display: flex;
justify-content: space-around;
white-space: nowrap;
width: 100%; 
animation: ${scrollX} 30s linear infinite; 
`;


const CarouselContainer = styled.div`
display: flex;
width: 2000px;
overflow: hidden;
user-select: none;
&:hover ${CarouselTrack} {
    animation-play-state: paused;
  }
`;

const Animation = styled.div`
animation: ${scrollX} 30s; 
&:hover {
    animation-play-state: paused;
}
`



const MovingWorkCarousel = () => {
  const cardItems = movingCarouselData.map((item) => (
    <CardDefault
      alt={item.title}
      to={`/ourwork/muralarts/${item.id}`}
      key={item.id}
      id={item.id}
      ButtonText={item.ButtonText}
      title={item.title}
      infoText={item.cardtext}
      imgLink={item?.img1}
    />
  ));

  return (
    <AppContainer className=" lg:py-12">
        <Wrapper>
    <CarouselContainer>
      <CarouselTrack>
        {cardItems}
        </CarouselTrack>
        <CarouselTrack>
        {cardItems}
        </CarouselTrack>
    </CarouselContainer>
    </Wrapper>
    </AppContainer>
  );
};

export default MovingWorkCarousel;
