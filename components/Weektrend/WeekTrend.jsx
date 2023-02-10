import styles from './weekTrend.module.css'
import Image from 'next/image'
const WeekTrend = () => {
    return (
        <>
            <div className={styles.updatedToday__main__div}>
                <h3>Trend This Week</h3><br />
                <div className={styles.updatedToday__main__div__container}>
                    <div className={styles.updatedToday__main__div__container__big__Screen}>
                        <Image
                            src="/images/primeSeries.webp"
                            alt="poster"
                            height={315}
                            width={612}
                        />
                        <div className={styles.big__Screen__info}>
                            <h4>Hush Hush Review: an exceptional story executed inefficiently</h4>
                            <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p>
                            <span style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</span>
                        </div>
                    </div>
                    <div className={styles.updatedToday__main__div__container__small__Screen}>
                        <div className={styles.small__Screen__item}>
                            <div className={styles.small__Screen__item__img}>
                                <Image
                                    className={styles.Screen__img}
                                    src="/images/primeSeries.webp"
                                    alt="poster"
                                    height={125}
                                    width={125}
                                />
                            </div>
                            <div className={styles.small__Screen__item__info}>
                                <h6>Relive the tale of modern Americas heinous cannibal, as Monster: The Jeffrey Dahmer Story drops on Netflix</h6>
                                <p style={{ fontWeight: "500", fontSize: "12px" }}>RELEASE DATE ON OTT: 21st September 2022GENRE: Lim....</p>
                                <span style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</span>
                            </div>
                        </div>

                        <div className={styles.small__Screen__item}>
                            <div className={styles.small__Screen__item__img}>
                                <Image
                                    className={styles.Screen__img}
                                    src="/images/primeSeries.webp"
                                    alt="poster"
                                    height={125}
                                    width={125}
                                />
                            </div>
                            <div className={styles.small__Screen__item__info}>
                                <h6>Relive the tale of modern Americas heinous cannibal, as Monster: The Jeffrey Dahmer Story drops on Netflix</h6>
                                <p style={{ fontWeight: "500", fontSize: "12px" }}>RELEASE DATE ON OTT: 21st September 2022GENRE: Lim....</p>
                                <span style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</span>
                            </div>
                        </div>

                        <div className={styles.small__Screen__item}>
                            <div className={styles.small__Screen__item__img}>
                                <Image
                                    className={styles.Screen__img}
                                    src="/images/primeSeries.webp"
                                    alt="poster"
                                    height={125}
                                    width={125}
                                />
                            </div>
                            <div className={styles.small__Screen__item__info}>
                                <h6>Relive the tale of modern Americas heinous cannibal, as Monster: The Jeffrey Dahmer Story drops on Netflix</h6>
                                <p style={{ fontWeight: "500", fontSize: "12px" }}>RELEASE DATE ON OTT: 21st September 2022GENRE: Lim....</p>
                                <span style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WeekTrend