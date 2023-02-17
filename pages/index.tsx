import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main.jsx';
import Trailers from '../components/Trailer/Trailers';
import WeekTrend from '../components/Weektrend/WeekTrend.jsx'
import ExploreMore from '../components/Explore/ExploreMore.jsx'

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Main />
        <WeekTrend />
        <ExploreMore/>
      </Layout >
    </>
  )
}
