import styles from './trailer.module.css'
import Image from 'next/image'
import axios from "axios";
import { useEffect, useState } from 'react'
const Trailers = (props) => {

    const [updates, setUpdate] = useState();

    const updatedToday = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://sotb.cybertizedigital.com/api/v1/articles/updatedtoday",
            })
            setUpdate(response.data.articles);
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        updatedToday()
    }, [])

    console.log(updates, "polo")

    return (
        <div className={styles.updatedToday__main__div}>
            <h3>UPDATED TODAY</h3><br />
            <div className={styles.updatedToday__main__div__container}>

                {
                    updates?.slice(0, 1).map((val, i) => {
                        return (
                            <>
                                <div className={styles.updatedToday__main__div__container__big__Screen}>
                                    <Image
                                        src={val?.photo?.secure_url}
                                        alt="poster"
                                        height={315}
                                        width={612}
                                    />
                                    <div className={styles.big__Screen__info}>
                                        <h4>{val.title}</h4>
                                        <p style={{ fontWeight: "500", fontSize: "14px" }}>OTT Release: 22 Sep 2022OTT Platform: Amazon Prime.....</p>
                                        <span style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>{val.timeinago}</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }



                <div className={styles.updatedToday__main__div__container__small__Screen}>

                    {
                                        updates?.slice(1,4).map((val, i) => {

                            return (
                                <>
                                    <div className={styles.small__Screen__item}>
                                        <div className={styles.small__Screen__item__img}>
                                            <Image
                                                className={styles.Screen__img}
                                                src={val?.photo?.secure_url}

                                                alt="poster"
                                                height={3}
                                                width={125}
                                            />
                                        </div>
                                        <div className={styles.small__Screen__item__info}>
                                            <h6>{val.title}</h6>
                                            <p style={{ fontWeight: "500", fontSize: "12px" }}>RELEASE DATE ON OTT: 21st September 2022GENRE: Lim....</p>
                                            <span style={{ color: "gray", fontWeight: "bold", fontSize: "12px" }}>{val.timeinago}</span>
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

export default Trailers