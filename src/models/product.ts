export interface Product {
    _id: string,
    name: string,
    status: ProductStatus,
    isGrabbed: boolean,
    category: string,
    calories?: number,
    fat?: number,
    carbs?: number,
    protein?: number,
    isOutOfStock: boolean
}

export interface ShoppingSliceState {
    products: Product[]
}

export enum ProductStatus {
    EDITION = "EDITION",
    VIEW = "VIEW",
}