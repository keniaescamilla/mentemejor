import React from 'react'
import Footer from '../Components/Footer'
import Header from '../components/header'
import Slider from '../Components/Slider'
import Form from '../../components/formularioc'
function Home() {
  return (
    <>
    <Header></Header>
    <div>
    <Slider></Slider>
    </div>
    <Form />
    <Footer></Footer>
    </>
  )
}

export default Home