import { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState('')
  const [definition, setDefinition] = useState('')

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setResult('Word not found in the dictionary.')
      setDefinition('')
      return
    }

    const foundWord = dictionary.find(
      item => item.word.toLowerCase() === searchTerm.toLowerCase()
    )

    if (foundWord) {
      setResult('')
      setDefinition(foundWord.meaning)
    } else {
      setResult('Word not found in the dictionary.')
      setDefinition('')
    }
  }

  return (
    <div className="container">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a word..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="definition-container">
        <h3>Definition:</h3>
        <p>{result || definition}</p>
      </div>
    </div>
  )
}

export default App
