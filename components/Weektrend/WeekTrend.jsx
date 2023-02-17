import styles from './weekTrend.module.css'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import GET_TREND from '../Redux/Action/getTrend.action'
import { useEffect } from 'react'

const WeekTrend = () => {

    const dispatch = useDispatch()
    const response = useSelector((response) => response.GET_TREND.data.result);
    useEffect(() => {
        dispatch(GET_TREND())
    }, []);
    // console.log(response, "trend")

    return (
        <>
            <div className={styles.updatedToday__main__div}>
                <h3>Trend This Week</h3><br />
                <div className={styles.updatedToday__main__div__container}>

                    {
                        response?.slice(0, 1).map((val, i) => {
                            return (
                                <>
                                    <div className={styles.updatedToday__main__div__container__big__Screen}>
                                        <img
                                            src={val.photo?.secure_url}
                                            alt="poster"
                                            height={315}
                                            width={612}
                                        />
                                        <div className={styles.big__Screen__info}>
                                            <h4>{val.title}</h4>
                                            <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p>
                                            <span style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }



                    <div className={styles.updatedToday__main__div__container__small__Screen}>


                        {
                            response?.slice(1,4).map((val, i) => {
                                return (
                                    <>
                                        <div className={styles.small__Screen__item}>
                                            <div className={styles.small__Screen__item__img}>
                                                <img
                                                    className={styles.Screen__img}
                                                    src={val.photo?.secure_url}

                                                    alt="poster"
                                                    height={125}
                                                    width={125}
                                                />
                                            </div>
                                            <div className={styles.small__Screen__item__info}>
                                                <h6>{val.title}</h6>
                                                <p style={{ fontWeight: "500", fontSize: "12px" }}>RELEASE DATE ON OTT: 21st September 2022GENRE: Lim....</p>
                                                <span style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>5 months ago</span>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }





                    </div>
                </div>
            </div>

        </>
    )
}

export default WeekTrend