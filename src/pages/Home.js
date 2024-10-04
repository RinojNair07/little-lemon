import restaurantImg from '../images/restauranfood.jpg';

const Home = () => {
    return <main>
        <article>
            <aside className='description'>
                <h1 className='heading-lemon'>Little Lemon</h1>
                <h2 className='sub-heading-lemon'>Chicago</h2>
                <p className='description-lemon'>We are family owned mediterian restaurant, focused on tradition recepies served with a modern twist</p>
                <button>Reserve a Table</button>
            </aside>
            <aside>
                <img src={restaurantImg} width={275} height={300} alt="Restaurant Image"></img>
            </aside>
        </article>
    </main>
}

export default Home;