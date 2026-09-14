
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/technologies/Technologies'
import { Suspense } from 'react'
import type { ITecnology } from './Types/TecnologyType'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const technologyFetch=async():Promise<ITecnology[]>=>{
  const res=await fetch('/data/technologies.json')
  const data= await res.json()
  return data
}
function App() {

  const technologyPromise=technologyFetch();
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Suspense fallback='<h2>Loading..</h2>
    '>
    <Technologies technologyPromise={technologyPromise}></Technologies>

    </Suspense>
    <Footer></Footer>
    <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default App
