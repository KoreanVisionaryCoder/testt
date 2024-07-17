import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 20px;
  margin: 20px 0;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
`;

const Section = ({ title, content, imageUrl }) => {
    return (
        <SectionWrapper>
            {title && <h2>{title}</h2>}
            {content && <Content>{content}</Content>}
            {imageUrl && <Image src={imageUrl} alt="Section Image" />}
        </SectionWrapper>
    );
};

export default Section;
