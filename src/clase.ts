class Producto{
    public nombre:string;
    public precio:number;
    private stock:number;

    constructor(nombre:string,precio:number,stock:number){
        this.nombre=nombre
        this.precio=precio
        this.stock=stock
    }

    aumentarStock(cantidad:number):void{
        if (cantidad<=0){
            throw new Error(`La cantidad es negativa`)
        }else{
            const StockNuevo = this.stock+cantidad
            console.log(`El stock despues del aumento es de ${StockNuevo}`);            
        }
        
    }
    disminuirStock(cantidad:number):void{
        if (cantidad<=0){
            throw new Error(`La cantidad es negativa`)
        }else{
            const StcokNuevoMenos = this.stock-cantidad
            console.log(`El stock ya disminuido es de ${StcokNuevoMenos}`);
            
        }
    }
    MostrarInformacion():void{
        console.log(`Hola es producto ${this.nombre} tiene un precio de $${this.precio}`);        
    }
}

const Compra = new Producto("labtop",100,10)
Compra.aumentarStock(11)
Compra.disminuirStock(150)
Compra.MostrarInformacion();