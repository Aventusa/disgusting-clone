import React, {useContext} from 'react';
import MobileMenuContext from './MobileMenuContext';
import Nav from '../Nav/Nav';
import './MobileMenu.scss'

function MobileMenu() {
    const navItems = ['Подкасты', 'Дичь', 'История', 'Игры', 'Кино', 'Книги', 'Музыка', 'Тесты']

    const isOpen = useContext(MobileMenuContext)

    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <Nav items={navItems}/>
        </div>
    );
}

export default MobileMenu;