export interface Product {
    id: string,
    name: string,
    status: ProductStatus,
    isGrabbed: boolean,
}

export interface ShoppingSliceState {
    products: Product[]
}

export enum ProductStatus {
    EDITION = "EDITION",
    VIEW = "VIEW",
}