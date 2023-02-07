import styles from './main.module.css'
import Filter from '../Filter/Filter.jsx'
import UpdatedToday from '../Updated/UpdatedToday.jsx'
import Topstories from '../TopStories/Topstories.jsx'
import Trailers from '../Trailer/Trailers'
const Main = () => {
    return (
        <div className={styles.main__main__div}>
            <Filter />
            <div className={styles.main__main__div__container}>
                <UpdatedToday />
            </div>
        </div>
    )
}

export default Main