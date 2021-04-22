import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Hots from './components/Hots/Hots';
import Categories from './components/Categories/Categories';
import Post from './components/Post/Post';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import MobileMenu from './components/MobileMenu/MobileMenu';
import MobileMenuContext from './components/MobileMenu/MobileMenuContext';
import tags from './components/Tag/tags';



function App() {

    const numberOfArticles = 6
    const url = 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=1b486fc920a3471c911c62c41eb994f8'

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [posts, setPosts] = useState([])
    const [visible, setVisible] = useState(numberOfArticles * 2)

    useEffect(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.articles.map(post => post.tag = tags[Math.floor(Math.random() * tags.length)]) // Добавляем рандомный тег к посту
                    setPosts(data.articles)
                })
                .catch(error => console.log(error))
    }, [])

    function mobileMenuHandle() {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    function loadMore() {
        if (visible < posts.length) {
            setVisible(visible + 6)
        }
    }

    return (
        <div className="app">
            <MobileMenuContext.Provider value={isMobileMenuOpen}>
                <MobileMenu />
                <div className="content">
                    <Header burgerOnClick={mobileMenuHandle}/>
                    <Promo data={posts}/>
                    <Categories list={['Крутое', 'Обсуждаемое']}/>
                    <Hots/>
                    <Categories list={['Последние записи']}/>
                    <section className='posts'>
                        <div className="posts-wrapper">
                            {posts.slice(0, numberOfArticles).map( post => <Post key={post.title} data={post}/>)}
                        </div>
                    </section>
                    <Slider data={posts}/>
                    <section className="posts">
                        <div className="posts-wrapper">
                            {posts.slice(numberOfArticles, visible).map(post => <Post key={post.title} data={post}/>)}
                        </div>
                        <div className="posts__footer">
                            <div className="posts__loadmore_btn" onClick={loadMore}>Загрузить ещё</div>
                        </div>
                    </section>
                    <Footer/>
                </div>
            </MobileMenuContext.Provider>
        </div>
    );
}

export default App;
