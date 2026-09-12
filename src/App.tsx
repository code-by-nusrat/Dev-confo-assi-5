import { Suspense, useState } from 'react'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Techs from './Components/Technologies/Techs'
import './index.css'
import type { TechType } from './Components/TechType'
import Footer from './Components/Footer'


const techsFetch =async():Promise<TechType[]>=>{
  const res = await fetch("/data.json")
  const data =await res.json()
  return data;
}
function App() {
 //console.log(techsPromise)
const [techsPromise] = useState(()=>techsFetch())
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
      <Techs techsPromise={techsPromise}></Techs>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
