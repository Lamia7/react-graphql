import React from 'react'
import { useQuery, gql } from '@apollo/client' // pour faire des requêtes graphQL
import './CharacterList.css'

function CharactersList() {

    // graphQL query
    const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
    `

    // destructuring qui remplace:
    // obj.error();
    // obj.loading();
    // obj.data();
    const { error, data, loading} = useQuery(GET_CHARACTERS);


    console.log({ error, data, loading})

    return (
        <>
        {loading && <p>spinner...</p>}
        {error && <p>Something went wrong</p>}
        {data && <div className='CharacterList'>
            {data.characters.results.map(character => {
                return (
                <div key={character.id}>
                    <img src={character.image} alt={character.name}/>
                    <h2>{character.name}</h2>
                </div>
            );
            })}
        </div>}
        </>
    )
}

export default CharactersList