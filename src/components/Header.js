import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/logo.png'; // 로고 이미지 import

const HeaderContainer = styled(animated.header)`
  background: ${props => props.isOpen ? '#000' : '#fff'};
  color: ${props => props.isOpen ? '#fff' : '#000'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s, color 0.3s;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 60px;
  margin: 0;
`;

const Menu = styled.nav`
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #000;
    padding: 20px 0;
  }
`;

const MenuItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background: ${props => props.isOpen ? '#fff' : '#000'};
  margin: 3px 0;
  transition: background-color 0.3s;
`;

const Header = ({ user, setUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <HeaderContainer style={props} isOpen={isOpen}>
            <Link to="/">
                <Logo src={logoImage} alt="기업성공메이커 로고" /> {/* 로고 클릭 시 홈으로 이동 */}
            </Link>
            <Burger onClick={() => setIsOpen(!isOpen)}>
                <BurgerLine isOpen={isOpen} />
                <BurgerLine isOpen={isOpen} />
                <BurgerLine isOpen={isOpen} />
            </Burger>
            <Menu isOpen={isOpen}>
                <MenuItem to="/page1">정책자금</MenuItem>
                <MenuItem to="/page2">경영컨설팅</MenuItem>
                <MenuItem to="/page3">프랜차이즈</MenuItem>
                <MenuItem to="/page4">상담신청</MenuItem>
                {/*<MenuItem to="/board">게시판</MenuItem>*/}
                {/*{user && user.role === 'admin' && (*/}
                {/*    <MenuItem to="/admin-login">관리자 로그인</MenuItem>*/}
                {/*)}*/}
                {/*{user ? (*/}
                {/*    <MenuItem as="button" onClick={handleLogout}>로그아웃</MenuItem>*/}
                {/*) : null}*/}
            </Menu>
        </HeaderContainer>
    );
};

export default Header;
