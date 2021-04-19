import React, {useState} from 'react';
import PropTypes from 'prop-types'
import CommentsCounter from '../CommentsCounter/CommentsCounter';
import {maxStringLength} from '../../help';
import './Slider.scss'

function Slider({data}) {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    function onMouseOverHandle(index) {
       if (activeSlideIndex === index) {
           return
       }
        setActiveSlideIndex(index)
    }

    return (
        <div className='slider-wrapper'>
            <div className="slider">
                {data.slice(0, 5).map((data, i) => {
                    return (
                        <div
                            className={`slider__display ${i === activeSlideIndex ? 'active' : ''}`}
                            key={data.title}
                            style={{backgroundImage: `url(${data.urlToImage})`}}
                        >
                            <div className="slider__display-title">
                                {data.title}
                                <CommentsCounter/>
                            </div>
                            <div className="slider__display-author">{data.author}</div>
                        </div>
                    )
                })}
                <div className="slider__tabs" >
                    {data.slice(0, 5).map((data, i) => {
                        return (
                            <div
                                className={`slider__tabs-tab ${i === activeSlideIndex ? 'active' : ''}`}
                                key={data.title}
                                onMouseOver={() => onMouseOverHandle(i)}
                            >
                                <a href="/"> {maxStringLength(data.title, 45)}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

Slider.propTypes = {
    data: PropTypes.array
}

export default Slider;