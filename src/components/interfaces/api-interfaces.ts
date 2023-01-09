export interface IProduct {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]
}

export interface IProductsResponse {
    limit: number
    products: IProduct[]
    skip: number
    total: number
}

export interface IAddACartResponseProduct {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedPrice": number
}

export interface IAddACartResponse {
    "id": number,
    "products": IAddACartResponseProduct[]
    "total": number, // total was calculated with quantity
    "discountedTotal": number,
    "userId": number, // user id is 1
    "totalProducts": number,
    "totalQuantity": number // total quantity of items
}

export enum Categories {
    SMARTPHONES = "smartphones",
    LAPTOPS = "laptops",
    FRAGRANCES = "fragrances",
    SKINCARE = "skincare",
    GROCERIES = "groceries",
    HOME_DECORATION = "home-decoration",
    FURNITURE = "furniture",
    TOPS = "tops",
    WOMENS_DRESSES = "womens-dresses",
    W0MENS_SHOES = "womens-shoes",
    MENS_SHIRTS = "mens-shirts",
    MENS_SHOES = "mens-shoes",
    MENS_WATCHES = "mens-watches",
    WOMENS_WATCHES = "womens-watches",
    WOMENS_BAGS = "womens-bags",
    WOMENS_JEWELLERY = "womens-jewellery",
    SUNGLASSES = "sunglasses",
    AUTOMOTIVE = "automotive",
    MOTORCYCLE = "motorcycle",
    LIGHTING = "lighting"
}