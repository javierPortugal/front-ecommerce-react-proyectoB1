import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './routes/AppRouter'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*Cargar header */}
    <Header />
    <AppRouter />
    {/*cargar footer*/}
    <Footer />
    
    </>
     
  )
}

export default App
