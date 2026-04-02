// Encapsilamiento de poo
class cuenta{
    public titular:string;
    private saldo:number;
    constructor(titular:string,saldo:number){
        this.titular=titular
        this.saldo=saldo
    }

    getSaldo(usuario:{nombre:string,role:string}):number{
        if(usuario.role == "cliente"){
            throw new Error(`los clinetes no ver el saldo `)
        }
        return this.saldo;
    }

    setSaldo(usuario:{nombre:string,role:string},saldo:number):void{
        if(usuario.role == "cliente"){
            throw new Error(`los clientes no pueden modificar el saldo`)
        }
        if (saldo<=0){
            throw new Error(`el saldo no puede ser menoa a 0`)
        }
        this.saldo+=saldo
    }
}

const usuarioAdmin = {
    nombre: "admin",
    role:"admin"
}
const usuario = {
    nombre:"usuario", 
    role:"cliente"
}
const CuentaAhorro = new cuenta("Brissvey",50)
console.log(CuentaAhorro.titular);
console.log(CuentaAhorro.getSaldo(usuarioAdmin));
CuentaAhorro.setSaldo(usuarioAdmin,100)
console.log(CuentaAhorro.getSaldo(usuario));



