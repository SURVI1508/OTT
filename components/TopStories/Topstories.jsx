import styles from './topstories.module.css'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Trailers from '../Trailer/Trailers';
import { useDispatch, useSelector } from 'react-redux';
import GET_TOP_STORIES from '../Redux/Action/getTopStories.action'
import { useEffect, useState } from 'react'
const Topstories = () => {
    const dispatch = useDispatch();
    const response = useSelector((response) => response.GET_TOP_STORIES.data.result);
    // const [stories, setStories] = useState(response)

    useEffect(() => {
        dispatch(GET_TOP_STORIES())
    }, [])
    // console.log(stories, "ooyy")
    console.log(response, "heyy")

    return (
        <>
            <h3>TOP STORIES</h3><br />
            <div className={styles.updatedToday__main__div__container__big__Screen}>
                <Swiper
                    className={styles.swiper}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={6}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        response?.map((val, i) => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <div className={styles.topSeries__image}>
                                            <img
                                                src={val?.photo?.secure_url}
                                                alt="poster"
                                                height={250}
                                                width={170}
                                            />
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }



                </Swiper>
            </div>



            <div className={styles.topSeries__slide__two}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={styles.topSeries__big__slide__card}>
                            <div className={styles.topSeries__big__slide__card__img}>
                                <Image
                                    src="/images/primeSeries.webp"
                                    alt="poster"
                                    height={200}
                                    width={350}
                                />
                            </div>
                            <div className={styles.topSeries__big__slide__card__info}>
                                <span style={{ fontWeight: "bold", fontSize: "14px" }}>Hush Hush Review: an exceptional story executed inefficiently</span>
                                {/* <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p> */}
                                <p style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</p>
                            </div>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className={styles.topSeries__big__slide__card}>
                            <div className={styles.topSeries__big__slide__card__img}>
                                <Image
                                    src="/images/primeSeries.webp"
                                    alt="poster"
                                    height={200}
                                    width={350}
                                />
                            </div>
                            <div className={styles.topSeries__big__slide__card__info}>
                                <span style={{ fontWeight: "bold", fontSize: "14px" }}>Hush Hush Review: an exceptional story executed inefficiently</span>
                                {/* <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p> */}
                                <p style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.topSeries__big__slide__card}>
                            <div className={styles.topSeries__big__slide__card__img}>
                                <Image
                                    src="/images/primeSeries.webp"
                                    alt="poster"
                                    height={200}
                                    width={350}
                                />
                            </div>
                            <div className={styles.topSeries__big__slide__card__info}>
                                <span style={{ fontWeight: "bold", fontSize: "14px" }}>Hush Hush Review: an exceptional story executed inefficiently</span>
                                {/* <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p> */}
                                <p style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.topSeries__big__slide__card}>
                            <div className={styles.topSeries__big__slide__card__img}>
                                <Image
                                    src="/images/primeSeries.webp"
                                    alt="poster"
                                    height={200}
                                    width={350}
                                />
                            </div>
                            <div className={styles.topSeries__big__slide__card__info}>
                                <span style={{ fontWeight: "bold", fontSize: "14px" }}>Hush Hush Review: an exceptional story executed inefficiently</span>
                                {/* <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p> */}
                                <p style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.topSeries__big__slide__card}>
                            <div className={styles.topSeries__big__slide__card__img}>
                                <Image
                                    src="/images/primeSeries.webp"
                                    alt="poster"
                                    height={200}
                                    width={350}
                                />
                            </div>
                            <div className={styles.topSeries__big__slide__card__info}>
                                <span style={{ fontWeight: "bold", fontSize: "14px" }}>Hush Hush Review: an exceptional story executed inefficiently</span>
                                {/* <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p> */}
                                <p style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

        </>
    )
}

export default Topstories