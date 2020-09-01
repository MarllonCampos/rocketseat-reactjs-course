import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import './styles.css'

import api from '../../services/api'

const Product = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        async function getApi() {
            let response = await api.get(`/products/${id}`)
            setProduct(response.data)
        }
        getApi()
    })

    return (
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>
                URL:<a href={product.url}>{product.url}</a>
            </p>
        </div>
    )
}

export default Product