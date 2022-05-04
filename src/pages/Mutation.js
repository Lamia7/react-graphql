/**
 * Simulation d'une mutation (ajout/modif sur API)
 */

import React from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_PRODUCT = gql`
mutation CreateProduct($name: String!, $quantityPreUnit: Int!) {
    createProduct(record: {
        name: $name,
        quantityPreUnit: $quantityPreUnit
    }){
        record {
            name
        }
    }
}`

const Mutation = () => {

    const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT, {
        variables: {
            name: "Hotdog",
            quantityPerUnit: 4
        }
    })
  return (
    <div><button onClick={() => createProduct()}></button></div>
  )
}

export default Mutation