import React from 'react';
import tags from './tags'
import PropTypes from 'prop-types'
import './Tag.scss'

function Tag({tagType}) {

    let options

    tags.map(tag => {
        return tag['tag'] === tagType ? options = tag : null
    })

    if (options) {

        const style = {
            backgroundColor: options.color
        }

        return (
            <div className='tag' style={style}>
                {options.name}
            </div>
        );
    }
    return <React.Fragment> </React.Fragment>
}

Tag.propTypes = {
    tagType: PropTypes.string
}

export default Tag;