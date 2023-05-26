import axios from 'axios';
import React, { useState } from 'react'

function AddProduct() {

    const [name, setname] = useState('');
    const [unitPrice, setunitPrice] = useState("")
    const [unitsInStock, setunitsInStock] = useState("")

    const add = () => {

        let newProduct = {
            name: name,
            unitPrice: Number(unitPrice),
            unitsInStock: Number(unitsInStock)

        }

        axios.post('https://northwind.vercel.app/api/products', newProduct)
            .then(res => {
                console.log(res.data);
            })
    }


    return (<>
        <h1>Add Product</h1>
        <div>
            <label>Name</label>
            <input type="text" onChange={(e) => setname(e.target.value)}></input>
        </div>
        <div>
            <label>Unit Price</label>
            <input type="text" onChange={(e) => setunitPrice(e.target.value)}></input>
        </div>
        <div>
            <label>Units In Stock</label>
            <input type="text" onChange={(e) => setunitsInStock(e.target.value)}></input>
        </div>
        <button onClick={add}>Add</button>

    </>)
}

export default AddProduct



