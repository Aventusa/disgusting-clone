import React from 'react';
import Tag from '../Tag/Tag';
import CommentsCounter from '../CommentsCounter/CommentsCounter';
import PropTypes from 'prop-types'
import defaultImage from '../../images/df-img.jpg'
import {fixDate, maxStringLength} from '../../help';
import './Post.scss'


function Post({data}) {

    const date = new Date(data.publishedAt)

    const style = {
        backgroundImage: data ? `url(${data.urlToImage || defaultImage})` : ''
    }

    function formatDate() {
        return `${fixDate(date.getDate())}.${fixDate(date.getUTCMonth() + 1)}.${date.getFullYear()}`
    }

    return (
        <article className='post'>
            <h2 className="post__title"><a href="/">{data.title}</a></h2>
            <div className="post__tags">
                <Tag tagType={data.tag.tag}/>
            </div>
            <div className="post__author">
                <a href="/">
                    {maxStringLength(data.author, 30) || 'Disgusting clone'}
                </a>
                | {formatDate()}
            </div>
            <div className="post__face" style={style}>
                <a href="/"> </a>
                <CommentsCounter/>
            </div>
            <p className='post__text'>
                {data.description}
            </p>
        </article>
    );
}

Post.propTypes = {
    data: PropTypes.object
}

export default Post;