import styles from './style.module.scss';
import Project from './Project';
import Link from "next/link";

export default function ProjectSet({ children }) {
  return (
    <div className={styles.container}>
      <Link href="https://twitter-proj.vercel.app/"><a>
        <Project title="Twitter Clone" coloreffect="blue">
          a twitter website clone, react project with the storybook tool
          (to see storybook add /ui/index.html).
        </Project>
      </a></Link>
      <Link href="https://node-mongo-booktest.herokuapp.com/"><a>
        <Project title="Online BookStore"  coloreffect="orange">
          an online book store, created with MERN
          (MongoDB Express React Node) structure.
        </Project>
      </a></Link>
      <Project title="Personal Website"  coloreffect="red">my personal website,
        created using nextjs framework</Project>
      {children}
    </div>);
}
