import React, {useState} from 'react'
import { gql, useLazyQuery } from '@apollo/client'

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!) { 
    characters(filter: { name: $name}) {
        results {
            location {
                name
            }
        }
    }
}
`

// GetCharacterLocations: nom de la requête avec les paramètres
// ($name: String!): name est une string et ce paramètre est obligatoire


function Search() {
    
    const [name, setName] = useState("")
    
    // useLazyQuery: retourne un array, 
    // 1er élément est la fonction qu'on peut nommer cme on souhaite et qui permet d'appeler la query quand on le souhaite, ici: getLocations()
    // 2e paramètre est l'objet qui sera récupéré : loading, error, data, called...
    // on ajoute called parce que LazyQuery est our des appels et pas Query
    const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })
    
    console.log({loading, error, data, called})

  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={() => getLocations()}>Search</button>
        {loading && <div>spinner...</div>}
        {error && <div>something went wrong</div>}
        {data && (
            <ul>
                {data.characters.results.map((character, index) => {
                    return <li key={index}>{character.location.name}</li>
                })}

            </ul>
        )}
    </div>
  )
}

export default Search