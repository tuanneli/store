import {IAddACartResponse, IProduct, IProductsResponse} from "../interfaces/api-interfaces";

export const getAllProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then((res): Promise<IProductsResponse> => res.json())
}

export const getProductsOfCategory = (category: string) => {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res): Promise<IProductsResponse> => res.json())
}

export const addACart = (id: number) => {
    return fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userId: 1,
            products: [
                {
                    id,
                    quantity: 1,
                },
            ]
        })
    })
        .then((res): Promise<IAddACartResponse> => res.json())
}

export const getACart = () => {
    return fetch('https://dummyjson.com/carts/1')
        .then((res): Promise<IAddACartResponse> => res.json());
}