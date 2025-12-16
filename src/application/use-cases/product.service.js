const Product = require('../../domain/entities/product.entity')
class ProductService {     
    constructor(productRepository) { // ¡Depende de la interfaz!
        this.productRepository = productRepository;     
    }    
    async getAllProducts() {         
        return this.productRepository.getAll();     
    }    
    async getProdcutById(id) { // Aquí iría la lógica de negocio (validaciones, etc.)
        return this.productRepository.getById(id); 
    } 
    async createProduct(productData) {
        const productEntity = new Product(
            null,
            productData.name,
            productData.description,
            productData.price,
            productData.stock,
            productData.category,
            productData.imageUrl
        );
        return this.productRepository.create(productEntity);
    }
    async updateProduct(id, productData) {
        const productEntity = new Product(
            id,
            productData.name,
            productData.description,
            productData.price,
            productData.stock,
            productData.category,
            productData.imageUrl
        );
        return this.productRepository.update(id, productEntity);
    }
    async deleteProduct(id) {
        return this.productRepository.delete(id);
    }
} 
module.exports = ProductService;