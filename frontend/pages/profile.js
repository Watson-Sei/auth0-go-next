// This import is only needed when checking authentication status directly from getInitialProps
import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import axios from 'axios';

const fetcher = url => fetch(url).then(res => res.json());

function ProfileCard({ user }) {

  return (
    <>
      <h1>Profile</h1>

      <div>
        <h3>Profile</h3>
        <img src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>

      <button onClick={async () => {
        await axios.get('/api/private').then((response) => {
          console.log(response.data)
        })
      }}>Private</button>
      <button onClick={async () => {
        await axios.get('/api/public').then((response) => {
          console.log(response.data)
        })
      }}>Public</button>
    </>
  )
}

function Profile() {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout>
  )
}

export default Profile;
