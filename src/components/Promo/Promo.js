import React from 'react';
import CommentsCounter from '../CommentsCounter/CommentsCounter';
import PropTypes from 'prop-types'
import './Promo.scss'


function Promo({data}) {
    return (
        <section className='promo'>
            {
                data.slice(0, 2).map(post => {

                    const style = {
                        backgroundImage: `url(${post.urlToImage})`
                    }

                    return (
                        <div className="promo__post" style={style} key={post.title}>
                            <div className="promo__post-title">
                                {post.title}
                                <CommentsCounter/>
                            </div>
                            <div className="promo__post-author">
                                {post.author}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}

Promo.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}

export default Promo;