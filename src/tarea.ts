// tarea
class Producto {
    public nombre: string;
    public precio: number;
    constructor(nombre: string, precio: number) {
        if (precio <= 0) {
            throw new Error("es precio es negativo tiene que ser mayor a 0 ");
        }
        this.nombre = nombre;
        this.precio = precio;
    }
}


class Carrito {
    private items: { producto: Producto; cantidad: number }[] = [];
    private total: number = 0;

    agregarProducto(producto: Producto, cantidad: number): void {
        if (cantidad <= 0) {
            throw new Error("La cantidad debe ser mayor a 0");
        }

        const itemExistente = this.items.find(
            item => item.producto.nombre === producto.nombre
        );

        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            this.items.push({ producto, cantidad });
        }

        this.calcularTotal();
    }

    eliminarProducto(nombre: string): void {
        const index = this.items.findIndex(
            item => item.producto.nombre === nombre
        );

        if (index === -1) {
            throw new Error("Producto no encontrado en el carrito");
        }

        this.items.splice(index, 1);
        this.calcularTotal();
    }

    private calcularTotal(): void {
        this.total = this.items.reduce((acc, item) => {
            return acc + item.producto.precio * item.cantidad;
        }, 0);
    }

    mostrarDetalle(): void {
        console.log(" Detalle del carrito:");

        this.items.forEach(item => {
            console.log(
                `${item.producto.nombre} - $${item.producto.precio} x ${item.cantidad}`
            );
        });

        console.log(` Total: $${this.total}`);
    }
}


const Compra = new Carrito();
const producto1 = new Producto("Laptop", 800);
const producto2 = new Producto("Mouse", 25);
const producto3 = new Producto("Teclado", 50);

Compra.agregarProducto(producto1, 1);
Compra.agregarProducto(producto2, 2);
Compra.agregarProducto(producto3, 1);


Compra.eliminarProducto("Laptop");


Compra.mostrarDetalle();
