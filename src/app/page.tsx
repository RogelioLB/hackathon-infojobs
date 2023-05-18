import Link from 'next/link'

export default function Auth() {
  return (
    <Link href={`https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`} target="_blank">Autorizar</Link>
  )
}
