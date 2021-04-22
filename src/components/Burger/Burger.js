import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import MobileMenuContext from '../MobileMenu/MobileMenuContext';
import './Burger.scss'

function Burger({onClick}) {

    const isActive = useContext(MobileMenuContext)

    return (
        <div
            onClick={onClick}
            className={`burger ${isActive ? 'active' : ''}`}>
            <span> </span>
            <span> </span>
            <span> </span>
        </div>
    )
}

Burger.propTypes = {
    onClick: PropTypes.func
}

export default Burger;