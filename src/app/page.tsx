import Link from 'next/link'
import SmallLogo from '../../components/Logo/SmallLogo'
import styles from './page.module.css'

export default function Auth() {
  return (
    <div className="container">
      <div className={styles.title}>
        <h1>Verificador de ofertas de InfoJobs con tu CV</h1>
        <p>Esta aplicación utiliza ChatGPT para evaluar tus capacidades con las pedidas en la oferta de trabajo.</p>
      </div>
      <Link 
        className={styles.link}
        href={`https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV,CANDIDATE_READ_CURRICULUM_EXPERIENCE&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`} 
      >
          Autorizar Con
          <SmallLogo />
      </Link>
    </div>
  )
}
