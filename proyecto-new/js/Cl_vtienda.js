export default class Cl_vTienda {
    constructor(controlador) {
       this.vista = document.getElementById("mainform");
       this.tabla = document.getElementById("mainform_tabla");
       this.btagregar = document.getElementById("mainform_btagregar");
       this.lblmontoPagar = document.getElementById("mainform_lblmontoPagar");
       this.lblmayor = document.getElementById("mainform_lblmayor");
      this.lbltotalventas = document.getElementById("mainform_lbltotalventas");
      this.btagregar.onclick = () => controlador.mostrarVistaClientes();
       }
    mostrar() {
      this.vista.hidden = false;
      
    }

    ocultar() {
      this.vista.hidden = true;
      
    
    }
     reportarcliente({
      cedula,
      cantidad,
      codigo,
      montoPagar,
      MayorArtVendido,
      TotalVentas,

    }){
      this.tabla.innerHTML += `<tr>
      <td>${cedula}</td>
      <td>${cantidad}</td>
      <td>${codigo}</td>
      <td>${montoPagar}</td>
      <td>${MayorArtVendido}</td>
      <td>${TotalVentas}</td>
      </tr>`
     
      this.lblmontoPagar.innerHTML = montoPagar;
      this.lblmayor.innerHTML = MayorArtVendido;
      this.lbltotalventas.innerHTML = TotalVentas;
      
    }
}