/**
 * Hook pour les personnages
 * permet d'éviter la répétition de code
 */
import { useQuery, gql } from '@apollo/client' // pour faire des requêtes graphQL

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

    export const useCharacters = () => {
        const { error, data, loading} = useQuery(GET_CHARACTERS);

        return {
            error,
            data,
            loading
        }
    }