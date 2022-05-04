import React from 'react'
import './CharacterList.css'
import { useCharacters } from '../hooks/useCharacter';

function CharactersList() {

    // destructuring qui remplace:
    // obj.error();
    // obj.loading();
    // obj.data();
    const { error, data, loading} = useCharacters();


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