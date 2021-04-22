import React from 'react';
import PropTypes from 'prop-types'
import './Categories.scss'

function Categories({list}) {
    if (list) {
        return (
            <div className='categories'>
                <ul className='categories__list'>
                    {
                        list.map(item => <li
                                key={item}
                                className="categories__list-item"
                            >{item}</li>
                        )}
                </ul>
            </div>
        )
    }
    return null
}

Categories.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string)
}

export default Categories;