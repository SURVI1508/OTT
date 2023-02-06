import styles from './category.module.css'
import cat from './catList'
import { useState } from 'react'
const Category = () => {
    const [catItems, setCat] = useState(cat)
    return (
        <div className={styles.category__main__div}>
            <div className={styles.category__main__div__container}>

                {
                    catItems.map((val,i) => {
                        return (
                            <>
                                <div className={styles.category__btn} key={i}>
                                    {val.name}
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Category