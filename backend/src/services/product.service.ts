import { ProductRepository, ProductListOptions } from '../repositories/product.repository';

export class ProductService {
  static async listProducts(options: ProductListOptions) {
    return ProductRepository.findAll(options);
  }

  static async getProductBySlug(slug: string) {
    const product = await ProductRepository.findBySlug(slug);
    if (!product) {
      throw new Error('NOT_FOUND');
    }
    return product;
  }
}

