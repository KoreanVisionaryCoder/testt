import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #fff;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled(animated.h2)`
  font-size: 2.5em;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Content = styled(animated.div)`
  margin-top: 20px;
  font-size: 1.2em;
  max-width: 600px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 10px;
  }
`;

const Button = styled(animated.button)`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const Page1 = () => {
    const titleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
    const contentProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
    const buttonProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 });

    return (
        <PageContainer>
            <Title style={titleProps}>Page 1</Title>
            <Content style={contentProps}>
                This is an example of a page styled with animations and a responsive design. It features a smooth color gradient background, keyframe animations for a fade-in effect, and responsive typography and layout adjustments for different screen sizes.
            </Content>
            <Button style={buttonProps}>Learn More</Button>
        </PageContainer>
    );
};

export default Page1;
