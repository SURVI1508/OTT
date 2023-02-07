import styles from './category.module.css'
import cat from './catList'
import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';

const Category = () => {
    const [catItems, setCat] = useState(cat)
    return (
        <div className={styles.category__main__div}>
            <div className={styles.category__main__div__container}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                />
                {
                    catItems.map((val, i) => {
                        return (
                            <>
                                {/* <SwiperSlide> */}
                                    <div className={styles.category__btn} key={i}>
                                        {val.name}
                                    </div>
                                {/* </SwiperSlide> */}

                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Category