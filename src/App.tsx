import { Suspense, useState } from 'react'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Techs from './Components/Technologies/Techs'
import './index.css'
import type { TechType } from './Components/TechType'


const techsPromise =async():Promise<TechType[]>=>{
  const res = await fetch("/data.json")
  const data =await res.json()
  return data;
}
function App() {
 //console.log(techsPromise)
//  const [count,setCount]=useState()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
      <Techs techsPromise={techsPromise()}></Techs>
      </Suspense>
    </>
  )
}

export default App
