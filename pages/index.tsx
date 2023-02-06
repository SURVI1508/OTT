import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <>
      <Layout>
        <Header/>
      </Layout >
    </>
  )
}
