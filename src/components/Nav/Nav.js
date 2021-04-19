import React from 'react';
import PropTypes from 'prop-types'
import './Nav.scss'

function Nav({ items }) {
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                {
                    items.map(item => {
                        return (
                            <li className="navbar__list-item" key={item}>
                                <a href="/">{item}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
}

export default Nav;