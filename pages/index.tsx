import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import ProjectSidebar from '../components/ProjectSidebar'
import Header from '../components/Header'
import UtilHeader from '../components/UtilHeader'
import Kanban from '../components/Kanban'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban Board</title>
      </Head>
      <div className="flex font-['GT_Walsheim']">
        <Sidebar />
        <ProjectSidebar />
        <div className="absolute top-0 left-96 h-screen w-[calc(100%-384px)] overflow-hidden">
          <Header />
          <UtilHeader />
          <Kanban />
        </div>
      </div>
    </>
  )
}

export default Home
