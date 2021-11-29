import styles from './style.module.scss';
import Skill from './Skill';

export default function SkillSet({ children }) {
  return (
    <div className={styles.container}>
      <Skill spin tabcolor="fume" imgsrc="/react.png">React</Skill>
      <Skill move tabcolor="yellow" imgsrc="/javascript.png">JavaScript</Skill>
      <Skill scale tabcolor="silver" imgsrc="/nodejs.png">Node.js</Skill>
      <Skill scale tabcolor="red" imgsrc="/html.png">HTML</Skill>
      <Skill spin tabcolor="fume" imgsrc="/react.png">R.Native</Skill>
      <Skill scale tabcolor="blue" imgsrc="/css.png">CSS</Skill>
      <Skill move tabcolor="silver" imgsrc="/mongodb.png">MongoDB</Skill>
      <Skill spin tabcolor="yellow" imgsrc="/jira.png">Jira</Skill>
      <Skill spin tabcolor="silver" imgsrc="/next.png">Next.js</Skill>
      {children}
    </div>);
}
