const OrderModel = require('./models/order.model');
const OrderRepository = require('../../../../domain/repositories/order.repository.interface');
const Order = require('../../../../domain/entities/order.entity');


class OrderMongoRepository extends OrderRepository{
  async getAll() {
        const orders = await OrderModel.find();
        return orders.map(o => new Order(p._id.toString(), o.producto, o.descripcion, o.cantidad, o.precio, o.descuento));
    }

    async getById(id) {
        const orders = await OrderModel.findById(id);
        if (!orders) return null;
        return new Order(orders._id.toString(), orders.producto, orders.descripcion, orders.cantidad, orders.precio, orders.descuento);
    }

    async create(orderEntity) {
        const newOrder = new OrderModel({
            producto: orderEntity.producto,
            descripcion: orderEntity.descripcion,
            cantidad: orderEntity.cantidad,
            precio: orderEntity.precio,
            descuento: orderEntity.descuento
        });
        const savedOrder = await newOrder.save();
        return new Order(savedProduct._id.toString(), savedOrder.producto, savedOrder.descripcion, savedOrder.cantidad, savedOrder.precio, savedOrder.descuento);
    }

    async update(id, orderEntity) {
        const updatedOrder = await OrderModel.findByIdAndUpdate(id, {
            producto: orderEntity.producto,
            descripcion: orderEntity.descripcion,
            cantidad: orderEntity.cantidad,
            precio: orderEntity.precio,
            descuento: orderEntity.descuento
        }, { new: true });

        if (!updatedOrder) return null;
        return new Order(updatedOrder._id.toString(), updatedOrder.producto, updatedOrder.descripcion, updatedOrder.cantidad, updatedOrder.precio, updatedOrder.descuento);
    }

    async delete(id) {
        await OrderModel.findByIdAndDelete(id);
    }
}

module.exports = OrderMongoRepository;