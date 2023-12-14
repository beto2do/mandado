export default interface Product {
    id: string,
    name: string,
    isGrabbed: boolean
}

export interface ShoppingSliceState {
    products: Product[]
}