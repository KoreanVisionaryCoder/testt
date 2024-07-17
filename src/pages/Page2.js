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

const slideIn = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: #fff;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled(animated.h2)`
  font-size: 3em;
  margin: 0;
  padding: 0;
  letter-spacing: 3px;
  animation: ${slideIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Content = styled(animated.div)`
  margin-top: 30px;
  font-size: 1.5em;
  max-width: 700px;
  line-height: 1.6;
  animation: ${slideIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 10px;
  }
`;

const Button = styled(animated.button)`
  margin-top: 40px;
  padding: 12px 25px;
  font-size: 1.2em;
  color: #fff;
  background-color: #ff6f61;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #e55b52;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const Page2 = () => {
    const titleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });
    const contentProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });
    const buttonProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 900 });

    return (
        <PageContainer>
            <Title style={titleProps}>Page 2</Title>
            <Content style={contentProps}>
                Welcome to Page 2. This page features stunning animations and a responsive design that adapts to any screen size. Enjoy the smooth transitions and vibrant colors that make this page come alive.
            </Content>
            <Button style={buttonProps}>Discover More</Button>
        </PageContainer>
    );
};

export default Page2;
