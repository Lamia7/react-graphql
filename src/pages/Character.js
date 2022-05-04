import React from 'react'
import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter';

function Character() {

    const {id}= useParams();
    const { error, data, loading} = useCharacter(id);

    console.log(error, data, loading)
  return (
      <>
    {loading && <p>spinner...</p>}
    {error && <p>Something went wrong</p>}
    {data &&
    <div className="Character">
        <img src={data.character.image} width={750} height={750} alt={data.character.name}/>
        <div className='Character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='Character-episode'>
                {data.character.episode.map((episode, index)=> {
                    return <div key={index}>
                        {episode.name} - <b>{episode.episode}</b>
                    </div>
                })}
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default Character