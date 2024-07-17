import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const SectionContainer = styled(animated.section)`
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px 20px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px 10px;
  }
`;

const SectionWithAnimation = ({ title, content }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

    return (
        <SectionContainer style={props}>
            <h2>{title}</h2>
            <p>{content}</p>
        </SectionContainer>
    );
};

export default SectionWithAnimation;
