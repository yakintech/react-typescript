import React, { useEffect, useState } from 'react'
import { Supplier } from '../../models/Supplier'
import axios from 'axios'

function Suppliers() {

    const [supplierList, setsupplierList] = useState<Supplier[]>([]);
    const [searchByName, setsearchByName] = useState('')

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setsupplierList(res.data);
            })

    }, [])


    const sortByCountry = () => {
        let sortedSuppliers = supplierList.sort((a: Supplier, b: Supplier) => a.address?.country?.localeCompare(b.address?.country))
        setsupplierList([...sortedSuppliers])
    }

    const searchByCompanyName = () => {
        let filteredSuppliers = supplierList.filter((q) => q.companyName.includes(searchByName));
        setsupplierList([...filteredSuppliers])
    }

    return (<>
        <div>
                <label htmlFor="">Name</label>
                <input type='text' onChange={(e) => setsearchByName(e.target.value)}/>
                <button onClick={searchByCompanyName}>Search</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>City</th>
                    <th onClick={() => sortByCountry()}>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    supplierList && supplierList.map((item: Supplier) => <tr key={item.id}>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.address?.city}</td>
                        <td>{item.address?.country}</td>
                    </tr>)
                }
            </tbody>

        </table>
    </>
    )
}

export default Suppliers


