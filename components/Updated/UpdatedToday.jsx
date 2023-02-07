import styles from './updated.module.css'
import Trailer from '../Trailer/Trailers'
import Topstories from '../TopStories/Topstories'
const UpdatedToday = () => {
    return (
        <div className={styles.updatedToday__main__div}>
            <div className={styles.updatedToday__main__div__container}>
                <Trailer />
            </div>
            <Topstories/>
        </div>
    )
}

export default UpdatedToday