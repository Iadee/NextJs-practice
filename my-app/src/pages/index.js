import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Footer from "./Footer";
import Card from "./Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My First Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Heading />
        <Card name="Joe this is a prop" number="prop used here" />
        <Card name="Jane this is a prop too" number="prop used here again" />

        <Footer />
      </main>
    </>
  );
}
