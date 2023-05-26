import axios from "axios";
import { Category } from "../models/Category";

export const categoryService = {
    getAll: async (): Promise<Category[]> => {

        let categories: Category[] = [];

        await axios.get('https://northwind.vercel.app/api/categories')
            .then(res => {


                categories = res.data;
            })

        return categories;


    },
    getById: async (id: number): Promise<Category> => {

        let response: Category = {
            id: 0,
            name: '',
            description: ''
        }

        await axios.get(`https://northwind.vercel.app/api/categories${id}`)
            .then(res => {
                response.name = res.data.name;
                response.description = res.data.description;
            });

        return response

    },
    add: async (data: Category): Promise<Category> => {
        let response: Category = {
            id: 0,
            name: '',
            description: ''
        }

        await axios.post('https://northwind.vercel.app/api/categories', data)
            .then(res => {
                response.name = res.data.name;
                response.description = res.data.description;
            })

        return response;
    },
    delete: async (id: number): Promise<boolean> => {

        let response: boolean = false;
        await axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
            .then(res => {
                response = true;
            })
            .catch(err => {
                response = false;
            })

        return response;
    }
}




//getAll function Category array return edecek????
//getById function Category object return edecek ve dışarıdan bir id alacak



interface User {
    name?: string
    surname?: string
}


let user: User = {

}