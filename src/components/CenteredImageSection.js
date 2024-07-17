import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 20px;
  margin: 20px 0;
  background: url(${props => props.background}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const LinkImage = styled.img`
  width: 40vh;
  height: auto;
  margin-bottom: 0px;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

const CenteredImageSection = ({ background, image, defaultImage, hoverImage, link }) => {
    return (
        <SectionWrapper background={background}>
            <Image src={image} alt="First Image" />
            <a href={link} target="_blank" rel="noopener noreferrer">
                <LinkImage
                    src={defaultImage}
                    alt="Default"
                    onMouseOver={e => (e.currentTarget.src = hoverImage)}
                    onMouseOut={e => (e.currentTarget.src = defaultImage)}
                />
            </a>
        </SectionWrapper>
    );
};

export default CenteredImageSection;
