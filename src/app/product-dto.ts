import { Product } from "./product";

export interface ProductDTO extends
    Omit <Product,'id' | 'category'> {
    categoryId: number,
}
