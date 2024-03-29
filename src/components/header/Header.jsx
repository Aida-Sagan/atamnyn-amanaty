import React from "react";
import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <img src='../../img/logo.png' alt="Логотип" />
            </Logo>
            <Navigation>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/admin">Войти в админку</a></li>
                </ul>
            </Navigation>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const Logo = styled.div`
    img {
      width: 100px; 
      height: auto; 
    }
`;

const Navigation = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 20px;
        
    }

    li {
        font-size: 18px;
    }
`;