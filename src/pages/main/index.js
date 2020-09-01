import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import './styles.css'

export default function Main() {
    const [products, setProducts] = useState([])
    const [productInfo, setProductInfo] = useState({})
    const [pages, setPages] = useState(1)

    useEffect(() => {
        async function getApi() {
            let response = await api.get(`/products/?page=${pages}`)
            const { docs, ...moreInfo } = response.data
            setProductInfo(moreInfo)
            setProducts(docs)
            console.log(moreInfo)
        }
        getApi()

    }, [pages])

    function handlePrevPage() {
        if (pages === 1) return
        setPages(pages - 1)
    }

    function handleNextPage() {
        if (pages === productInfo.pages) {
            alert('Não há mais páginas')
            return
        }

        setPages(pages + 1)
    }





    return (
        <div className="product-list">{products.map(product => (
            <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <a href="">Acessar</a>
            </article>))}


            <div className="actions">
                <button disabled={pages === 1} onClick={handlePrevPage}>Anterior</button>
                <button disabled={pages === productInfo.pages} onClick={handleNextPage}>Próximo</button>
            </div>
        </div>

    )
}