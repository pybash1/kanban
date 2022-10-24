import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import ProjectSidebar from '../components/ProjectSidebar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban Board</title>
      </Head>
      <div className="flex font-['GT_Walsheim']">
        <Sidebar />
        <ProjectSidebar />
      </div>
    </>
  )
}

export default Home
