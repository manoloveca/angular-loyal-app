import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

agregarNombre() {
  this.nombres.push(this.nombre);
}
  title = 'app-loyal';
  mostrarLogin:boolean=false;
  applogin='applogin';
  nombres = ['juan','antonio','pedro'];
  nombre: string ='';

  cambiarVisibilidad(){
    console.log('cambiar');
    this.mostrarLogin=!this.mostrarLogin;
  }
  cambiarClase(){

    this.applogin = 'Otra clase';
  }
  alert(){
    window.alert('doble click');
  }
}
