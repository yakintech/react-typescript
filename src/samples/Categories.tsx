import React, { useEffect, useState } from 'react'
import { categoryService } from '../service/categoryService';
import { Category } from '../models/Category';

function Categories() {

    const [categoryList, setcategoryList] = useState<Category[]>([]);


 
    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {

        categoryService.getAll()
            .then(res => {
                console.log('DATA', res);
                
                setcategoryList(res);
            })
    }

    const deleteCategory = (id:number) => {

        categoryService.delete(id)
        .then(res => {
            loadData();
        })
    }


    return (<>
        <ul>
            {
                categoryList && categoryList.map(item => <li onClick={() => deleteCategory(item.id)}>{item.name}</li>)
            }
        </ul>
    </>
    )
}

export default Categories