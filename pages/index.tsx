import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='main-h-screen' >
      < Header />
      <div className="mt-0">
      {/* < Trending /> */}
      </div>
      <div className="mt-20">
      {/*  < CMCTable */}
      </div>
    </div>
  )
}

export default Home
