import React from 'react';
import CommentsCounter from '../CommentsCounter/CommentsCounter';
import Tag from '../Tag/Tag';
import './Hots.scss'

function Hots() {
    return (
        <section className='hots'>
            <div className="hots__content">
                <div className="row">
                    <div className="hots__post">
                       <div className="hots__post-tags">
                           <Tag tagType='news' />
                           <Tag tagType='podcast' />
                       </div>
                        <CommentsCounter />
                        <div className="hots__post-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </div>
                    </div>
                    <div className="hots__post">
                        <div className="hots__post-tags">
                            <Tag tagType='art' />
                            <Tag tagType='music' />
                            <Tag tagType='reviews' />
                        </div>
                        <CommentsCounter />
                        <div className="hots__post-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="hots__post">
                        <div className="hots__post-tags">
                            <Tag tagType='news' />
                        </div>
                        <CommentsCounter />
                        <div className="hots__post-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </div>
                    </div>
                    <div className="hots__post">
                        <div className="hots__post-tags">
                            <Tag tagType='games' />
                        </div>
                        <CommentsCounter />
                        <div className="hots__post-title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hots;