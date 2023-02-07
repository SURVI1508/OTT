import styles from './header.module.css'
import Navigeter from '../Nav/Nav'
import Category from '../Category/Category'
import Filter from '../Filter/Filter.jsx';

const Header = () => {
    return (
        <div className={styles.header__main__div}>
            <Navigeter />
            <Category />
        </div>
    )
}

export default Header