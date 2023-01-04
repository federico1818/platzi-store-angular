import { Category } from "./category"

export interface Product {
    id: number
    title: string
    price: number
    images: string[]
    description: string
    category: Category
}
