import React from 'react';
import styled from 'styled-components';
import section2icon1 from '../assets/images/section2icon1.png';
import section2icon2 from '../assets/images/section2icon2.png';
import section2icon3 from '../assets/images/section2icon3.png';
import section2icon4 from '../assets/images/section2icon4.png';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 20px;
`;

const Section = styled.div`
  flex: 1 1 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px;

  @media (max-width: 768px) {
    flex: 1 1 45%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  animation: fadeIn 2s;
`;

const Title = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 10px;
`;

const ImageSection = () => {
    return (
        <SectionContainer>
            <Section>
                <Image src={section2icon1} alt="식품제조" />
                <Title>식품제조</Title>
            </Section>
            <Section>
                <Image src={section2icon2} alt="식자재 유통" />
                <Title>식자재 유통</Title>
            </Section>
            <Section>
                <Image src={section2icon3} alt="프랜차이즈" />
                <Title>프랜차이즈</Title>
            </Section>
            <Section>
                <Image src={section2icon4} alt="음식점" />
                <Title>음식점</Title>
            </Section>
        </SectionContainer>
    );
};

export default ImageSection;
