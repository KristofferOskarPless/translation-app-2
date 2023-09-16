import Image from 'next/image'
import TextField from './components/textfield';
import Button from './components/button';
import NavBar from './components/navbar'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center">
      <NavBar></NavBar>
      <div className=" w-1/2 pt-48">
        <div className="justify-center">
          <h1 className="text-5xl font-semibold pb-8">🚀 Ale's Amazing Translation App</h1>
          <TextField className="m-16"
            placeholder="Agurk"
          />
          <TextField
            placeholder="Your answer"
          />
          <Button>
          </Button>
        </div>
      </div>
    </main>
  )
}
