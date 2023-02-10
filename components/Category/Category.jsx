import styles from './category.module.css'
// import cat from './catList'
import { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';

const Category = () => {
    const [catItems, setCat] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        fetch('https://sotb.cybertizedigital.com/api/v1/supercategories')
            .then(response => response.json())
            .then(data =>setCat(data['supercategories']))

    }, [])
    console.log(catItems)
    return (
        <div className={styles.category__main__div}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={2}
                slidesPerView={10}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    catItems.map((val, i) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <div className={styles.category__btn} style={{ background: active == i ? "black" : "", color: active == i ? "white" : "black" }} onClick={() => setActive(i)}>
                                        {val.superCategoryName}
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                }

            </Swiper>
        </div >
    )
}

export default Category