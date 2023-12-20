export interface Product {
    id: string,
    name: string,
    status: ProductStatus,
    isGrabbed: boolean,
    category: string,
    calories?: number,
    fat?: number,
    carbs?: number,
    protein?: number
}

export interface ShoppingSliceState {
    products: Product[]
}

export enum ProductStatus {
    EDITION = "EDITION",
    VIEW = "VIEW",
}