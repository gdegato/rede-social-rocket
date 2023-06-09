import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/gdegato.png" />
          <div className={styles.authorInfo}>
            <strong>Rose Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <div>
          <time title="11 de maio de 2023" dateTime="2022-05-11 08:00:30">
            Publicado há 1h
          </time>
        </div>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal👋</p>
        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          criar todo o design e codar na unha, mas consegui💪🏻
        </p>
        <p>
          <a href="">jane.desig/doctorcare</a>
        </p>
        <p>
          <a href=""> devonlane.design </a>
          <a href=""> #uiux </a> <a href=""> #userexperience</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />

      </div >
    </article>
  )
}
