import React, { useEffect, useState } from 'react';
import {Pokemon} from './components/Pokemon';
import {ModalInfo} from './components/ModalInfo';
import './index.css';

function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data)
      })
  })
}

function App () {
  const [pokemonsData, setPokemonsData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [clickedPokemon, setClickedPokemon] = useState({})

  useEffect(() => {
    async function fetchData() {
      let result = await getData('https://pokeapi.co/api/v2/pokemon?limit=12')
      setNextUrl(result.next)
      await firstLoadingData(result.results)
    }
    fetchData()
  }, [])

  const firstLoadingData = async (data) => {
    let pokemonsDataOnPage = await Promise.all(data.map(pokeInfo => {
      let pokemonRecord = getData(pokeInfo.url)
      return pokemonRecord
    }))
    setPokemonsData(pokemonsDataOnPage)
  }

  const othersLoadingData = async (data) => {
    let pokemonsDataOnPage = await Promise.all(data.map(pokeInfo => {
      let pokemonRecord = getData(pokeInfo.url)
      return pokemonRecord
    }))
    pokemonsDataOnPage.map(pokemonInfo => {
      setPokemonsData((prev) => {
        return[
          ...prev, pokemonInfo
        ]
      })
    })
  }

  const loadMore = async () => {
    setPokemonsData([])
    let data = await getData(nextUrl)
    await othersLoadingData(data.results)
    setNextUrl(data.next)
  }

  return (
    <div className='container'>
      <div className='title-container'>
        <p className='title'>Pokedex</p>
      </div>
      <div className='pokemons-container'>
        <div className='pokemons-list'>
          {pokemonsData.map(pokemon => {
            console.log(pokemon)
            return (
              <div onClick={() => {
                setIsVisible(true)
                setClickedPokemon(pokemon)
              }} key={pokemon.id}>
                <Pokemon pokemon={pokemon} key={pokemon.id} />
              </div>
            )
          })}
        </div>
        <div className='button-block'>
          <button className='button' onClick={() => loadMore()}>Load More</button>
        </div>
      </div>
      <div className='modal-container'>
        <div className='modal-info'>
          {isVisible ? <ModalInfo pokemon={clickedPokemon} key={clickedPokemon.id}/> : null}
        </div>
      </div>
    </div>
  )
}

export default App;