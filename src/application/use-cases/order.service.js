const Order = require('../../domain/entities/order.entity');

class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async getAllOrders() {         
        return this.orderRepository.getAll();     
    }    
    async getOrderById(id) { // Aquí iría la lógica de negocio (validaciones, etc.)
        return this.orderRepository.getById(id); 
    } 
    async createOrder(orderData) {
        const productEntity = new Order(
            null,
            orderData.producto,
            orderData.description,
            orderData.cantidad,
            orderData.precio,
            orderData.decuento,
            orderData.total
        );
        return this.orderRepository.create(orderEntity);
    }
    async updateOrder(id, orderData) {
        const productEntity = new Order(
            id,
            orderData.producto,
            orderData.description,
            orderData.cantidad,
            orderData.precio,
            orderData.decuento,
            orderData.total
        );
        return this.orderRepository.update(id, orderEntity);
    }
    async deleteOrder(id) {
        return this.orderRepository.delete(id);
    }
}

module.exports = OrderService;