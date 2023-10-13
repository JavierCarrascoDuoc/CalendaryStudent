import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/model/Usuario';

@Component({
  selector: 'app-usuario-all',
  templateUrl: './usuario-all.page.html',
  styleUrls: ['./usuario-all.page.scss'],
})
export class UsuarioAllPage implements OnInit {

  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  producto: Usuario = { id: 1, nombre: '', apellido: '', email: '', clave: ''};;

  constructor() { }
  ngOnInit() {  }
  public id: string = '';


  leer() {}
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
}