import React from 'react';
import Nav from '../Nav/Nav';
import bulletImg from '../../images/bullet.png'
import './Footer.scss'

function Footer() {

    const items = ['ПОДКАСТЫ', 'ДИЧЬ', 'ИСТОРИЯ', 'ИГРЫ', 'КИНО', 'КНИГИ', 'МУЗЫКА', 'ТЕСТЫ', 'GITHUB']

    return (
        <footer className='footer'>
            <Nav items={items}/>
            <img src={bulletImg} alt="Дура" width='100px' className='footer__img'/>
            <div className="footer__copyright">
                DISGUSTING CLONE © 18+ <span>пзд</span>
            </div>
        </footer>
    );
}

export default Footer;