import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  //styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
    txUsuario:string ='Harrys';
	txClave:string = 'macarena';
	txWeb:string = 'www.harrys.cl';
	txMail:string = 'soporte@harrys.cl';
	txTeleFono:string = '998189935';
	txPropaganda:string = 'Hello';
	txNotificaciones:string = 'Hola';
    txEdad:string = 'Hola';
	msg: string = 'Trabajamos para Usted';	

  constructor() {}
  funActualizar(){
    this.msg = ' Usuario :' + this.txUsuario
              + ' Clave :' + this.txClave
              + ' Web :' + this.txWeb
              + ' Mail :' + this.txMail
              + ' Fono :' + this.txTeleFono
              + ' Propaganda :' + this.txPropaganda
              + ' Notificaciones :' + this.txNotificaciones
              
              ;
  }
}
