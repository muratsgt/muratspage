import styles from './style.module.scss';
import Project from './Project';
import Link from "next/link";

export default function ProjectSet({ children }) {
  return (
    <div className={styles.container}>
      <Link href="https://twitter-proj.vercel.app/"><a>
        <Project title="Twitter Clone" coloreffect="default">
          twitter website clone; a React project using NextJs framework,
          backend API from NextJs and database MongoDB
        </Project>
      </a></Link>
      <Link href="https://bodymassindex-xi.vercel.app/"><a>
        <Project title="BMI Calculator" coloreffect="default">
          a simple, good looking, Body Mass Index calculator,
          you can see your latest scores
        </Project>
      </a></Link>
      <Link href="https://node-mongo-booktest.herokuapp.com/"><a>
        <Project title="Online BookStore" coloreffect="default">
          an online book store, created with MERN
          (MongoDB Express React Node) structure.
        </Project>
      </a></Link>
      {children}
    </div>);
}
