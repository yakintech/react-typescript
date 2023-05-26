import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {

    const [products, setproducts] = useState([])

    useEffect(() => {

        loadData();

    }, [])


    const loadData = () => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })
    }


    const deleteProduct = (id: number) => {

        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {

                loadData();
            }
            )
    }


    return (<>
        <ul>
            {
                products && products.map((item: Product) => <li onClick={() => deleteProduct(item.id)} key={item.id}>{item.name.toUpperCase()}</li>)
            }
        </ul>
    </>
    )
}

export default Products


//object design
interface Product {
    id: number
    name: string
}