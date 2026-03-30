import { Suspense } from 'react'
import './App.css'
import Hero from './components/homepage/Hero'
import Playears from './components/homepage/players/Playears'
import Navbar from './components/Navbar'

const fecthPlayer = async () => {
  const res = await fetch("/playerData.json")
  return res.json();
}

function App() {

  const playersPromise = fecthPlayer();

  return (
    <>
      <header className='container mx-auto sora'>
        <Navbar></Navbar>
      </header>
      <main className='container mx-auto sora'>
        <Hero></Hero>
        <Suspense fallback={<div>Loading...</div>}>
          <Playears playersPromise={playersPromise}></Playears>
        </Suspense>
      </main>
    </>
  )
}

export default App
