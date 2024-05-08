import { createRoot } from 'react-dom/client'
import './src/css/index.css'
import { Header } from './src/componets/Header'
import { MainSection } from './src/componets/MainSection'
import { Experience } from './src/componets/Experience'
import { Skills } from './src/componets/Skills'
import { Footer } from './src/componets/Footer'
import { About } from './src/componets/About'
import { Contact } from './src/componets/Contact'


const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Header/>
    <MainSection/>
    <Experience/>
    <Skills/>
    <About/>
    <Contact/>
    <Footer/>
  </>
)
