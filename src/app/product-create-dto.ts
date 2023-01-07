import { Product } from "./product"

export interface ProductCreateDTO
    extends Omit <Product, 'id' | 'category'> {
    categoryId: number,
}
