export default class Cl_mClientes {
    constructor(cedula, cantidad, codigo) {
        this.cedula = cedula;
        this.cantidad = cantidad;
        this.precioA = 10.00;
        this.precioB = 5.00;
        this.precioC = 20.00;
        this.codigo = codigo;
    }
   
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    get cantidad() {
        return this._cantidad;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
   
    montoPagar() { 
        if (this.codigo == "A") { 
           return this.precioA * this.cantidad 
           } else if (this.codigo == "B") {
              return this.precioB * this.cantidad 
           } else if (this.codigo == "C") {
             return  this.precioC * this.cantidad 
           }
       }
}