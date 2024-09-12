import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Section1 from './components/Section1'
import Included from './components/Included'
import ModelOneVTwo from './components/ModelOneVTwo'
import Video from './components/Video'
import RunYourOwn from './components/RunYourOwn'
import Image from './components/Image'
import Features from './components/Features'



function App() {

  return (<>
    <Navbar />
    <div
      className='sm:px-12'>

      <Banner />
      <Section1 />
      <Included />
      <ModelOneVTwo />
      <Video />
      <RunYourOwn />
      <Image />
      <Features />
    </div>
  </>
  )
}

export default App
