import React, {useState} from 'react';
import icon from '../../images/search-icon.png'
import './Search.scss'
function Search() {

    const [classList, setClassList] = useState(['search'])

    function handleClick() {
        if (!classList.includes('active')) {
            setClassList(classList.concat('active'))
        }
    }

    return (
        <div className='search-wrapper'>
            <input
                maxLength={30}
                type="text"
                id='search'
                name='search'
                className={classList.join(' ')}
            />
            <img src={icon} alt="Search" className='search__icon' onClick={handleClick}/>
        </div>
    );
}

export default Search;