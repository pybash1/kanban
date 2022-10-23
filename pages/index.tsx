import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban Board</title>
      </Head>
      <div className="flex">
        <Sidebar />
      </div>
    </>
  )
}

export default Home
