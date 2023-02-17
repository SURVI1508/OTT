import styles from './exploreMore.module.css'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import GET_TREND from '../Redux/Action/getTrend.action';
import { useEffect } from 'react';
const ExploreMore = () => {

    const dispatch = useDispatch();
    const response = useSelector((response) => response.GET_TREND.data.result);
    useEffect(() => {
        dispatch(GET_TREND());
    }, [])
    console.log(response, "explore")
    return (
        <div className={styles.main__main__div}>
            <h3>EXPLORE MORE</h3>
            <div className={styles.main__main__div__container}>
                <div className={styles.explore__more__card__container}>

                    {
                        response?.map((val, i) => {
                            return (
                                <>

                                    <div className={styles.topSeries__big__slide__card}>
                                        <div className={styles.topSeries__big__slide__card__img}>
                                            <Image
                                                src={val.photo?.secure_url}
                                                alt="poster"
                                                height={200}
                                                width={350}
                                            />
                                        </div>
                                        <div className={styles.topSeries__big__slide__card__info}>
                                            <span style={{ fontWeight: "bold", fontSize: "14px" }}>{val.title}</span>
                                            {/* <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p> */}
                                            <p style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>{val.timeinago}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ExploreMore