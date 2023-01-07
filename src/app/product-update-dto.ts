import { ProductCreateDTO } from "./product-create-dto";

export interface ProductUpdateDTO
    extends Partial<ProductCreateDTO> {
}
