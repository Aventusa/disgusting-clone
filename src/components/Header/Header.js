import React from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import Burger from '../Burger/Burger';
import PropTypes from 'prop-types'
import logo from '../../images/logo.svg'
import githubLogo from '../../images/github-logo.svg'
import './Header.scss'


const navItems = ['Подкасты', 'Дичь', 'История', 'Игры', 'Кино', 'Книги', 'Музыка', 'Тесты']

function Header({burgerOnClick}) {
    return (
        <React.Fragment>
            <header className='header'>
                <div className="header__logo-wrapper">
                    <a href="/"><img src={logo} alt="DM.com" className='header__logo'/></a>
                </div>
                <Nav items={navItems}/>
                <Burger onClick={burgerOnClick}/>
                <a href="https://github.com/Aventusa/disgusting-clone" className='github-logo'>
                    <img src={githubLogo}
                         alt="GITHUB"
                         width='50px'/>
                </a>
            </header>
            <div className="under-row">
                <p className='under-row__info'><span>Популярное:</span>
                    <a href="/">Каким человеком был Петр Великий? Подкаст «Поручик Киже» S3</a>
                </p>
                <Search/>
                <div className="feedback-btn">Напишите нам</div>
            </div>
        </React.Fragment>

    );
}

Header.propTypes = {
    burgerOnClick: PropTypes.func
}

export default Header;