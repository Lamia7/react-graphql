/**
 * Hook pour un personnage
 * permet d'éviter la répétition de code
 */
 import { useQuery, gql } from '@apollo/client' // pour faire des requêtes graphQL

 // graphQL query
 const GET_CHARACTER = gql`
 query GetCharacter($id: ID!){
     character(id: $id) {
             id
             name
             image
             episode {
                 name
                 episode
             }
     }
 }
 `

 export const useCharacter = (id) => {
     const { error, data, loading} = useQuery(GET_CHARACTER, {
         variables: {
             id
         }
     });

     return {
         data,
         error,
         loading
     }
 };