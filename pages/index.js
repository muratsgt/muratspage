import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import Head from 'next/head';
import Typical from 'react-typical';
import Contacts from '../components/Contacts';
import Navbar from '../components/Navbar';
import SkillSet from '../components/Skills';
import ProjectSet from '../components/Projects';
import ImageBox from '../components/ImageBox';

function About() {
  return (
    <div className={styles.about}>
      <h1>
        {"Hi, I'm Murat"}
      </h1>
      <h2>
        Developer, engineer, and technology enthusiast.
        Currently in Germany, working as a Full Stack Developer.
        My main tech stack; JavaScript, React, Vue.Js, Laravel, PHP, Next.Js.
        Also researcher, life long learner and likes to travel.
      </h2>
      <Welcome />
    </div>
  )
}

function Welcome() {
  return (
    <div className={styles.welcome}>
      <Typical steps={["Check out my work ✔", 3000, 'Feel free to contact ✉', 3000]} loop={3} wrapper="h3" />
    </div>);
}

function HtmlHead() {
  return (
    <Head>
      <title>Murats Homepage</title>
      <meta name="description" content="my personal website" />
      <link rel="icon" href="/mub.ico" />
    </Head>);
}

export default function Home() {
  const [desc, setDesc] = useState(1);

  const handleClick = (value) => {
    setDesc(value);
  }

  return (
    <div className={styles.app}>
      <HtmlHead></HtmlHead>
      <div className={styles.main}>
        <div className={styles.box1}>
          <ImageBox></ImageBox>
          <div className={styles.titleBox}>
            <h1>
              Murat Akca<br />
              <span>Software Developer</span>
            </h1>
          </div>
        </div>
        <div className={styles.box2}>
          <Navbar onClick={handleClick}></Navbar>
          <div className={styles.details}>
            {desc === 1 ? <About />
              : (desc === 2 ? <ProjectSet /> : <SkillSet />)}
          </div>
        </div>
      </div>
      <Contacts className={styles.foot}></Contacts>
    </div>
  )
}
