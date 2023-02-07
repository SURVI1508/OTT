import styles from './filter.module.css'
import filterBrand from './filter'
import { useState } from 'react'
import Image from 'next/image';
const Filter = () => {
    const [filt, setFilt] = useState(filterBrand)
    return (
        <>
            <div className={styles.filter__main__div}>
                <div className={styles.filter__item}>
                    <h5>OTT FILTER</h5>
                </div>
                {
                    filt.map((val, i) => {
                        return (
                            <>
                                <div className={styles.filter__item} key={i}>
                                    <Image
                                        src={val.img}
                                        alt="logo"
                                        height={60}
                                        width={60}
                                    />
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Filter