import styles from './topstories.module.css'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Trailers from '../Trailer/Trailers';
const Topstories = () => {
    return (
        <>
            <h3>TOP STORIES</h3><br />
            <div className={styles.updatedToday__main__div__container__big__Screen}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={6}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={styles.topSeries__image}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.topSeries__image}>
                            <Image
                                src="/images/primeSeries.webp"
                                alt="poster"
                                height={250}
                                width={158}
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.topSeries__image}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.topSeries__image}>
                            <Image
                                src="/images/primeSeries.webp"
                                alt="poster"
                                height={250}
                                width={158}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.topSeries__image}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.topSeries__image}>
                            <Image
                                src="/images/primeSeries.webp"
                                alt="poster"
                                height={250}
                                width={158}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.topSeries__image}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.topSeries__image}>
                            <Image
                                src="/images/primeSeries.webp"
                                alt="poster"
                                height={250}
                                width={158}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>



            <div className={styles.topSeries__slide__two}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
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