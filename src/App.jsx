import { useState } from 'react'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={reactLogo} className="App-logo" alt="logo" /> */}
        <img src={viteLogo} className="App-logo" alt="logo" />
        <p className='text-center'>
          Hello Vite + React!
        </p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </p>
      </header>
    </div>
  )

}

export default App
