class ProductRepository {
    constructor(){
        if (this.constructor === ProductRepository) {
            throw new Error("Cannot instantiete abstract class");
        }
    }

    async getAll() {
        throw new Error("Method 'getAll()' must be implemented");
    }

    async getById() {
        throw new Error("Method 'getById()' must be implemented");
    }

    async create() {
        throw new Error("Method 'create()' must be implemented");
    }

    async update() {
        throw new Error("Method 'update()' must be implemented");
    }

    async delete() {
        throw new Error("Method 'delete()' must be implemented");
    }
}

module.exports = ProductRepository;