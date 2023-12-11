import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


const CODIGO = 'CERTAMEN23';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() items: any; // Data passed in by componentProps
  @Input() type: any;
  nombreProducto: string;
  direccion: string;
  cantidad: number;
  formDisabled: boolean;
  checkNombreProducto: boolean;
  checkCantidad: boolean;
  checkEvento: boolean;
  entryCreated : boolean;
  selectedDate: string;

  constructor(private modalController: ModalController, private http: HttpClient, private toastController: ToastController) { 
    this.nombreProducto = '';
    this.direccion = '';
    this.cantidad = 0;
    this.formDisabled = true;
    this.checkNombreProducto = false;
    this.checkCantidad = false;
    this.checkEvento = false;
    this.entryCreated = false;
    this.selectedDate = new Date().toISOString();
  }


  ngOnInit() {
    this.setTitle();
    this.setInputs();
  }

  setTitle(){
    if(this.items === null){
      return 'Agregar tipo de producto'
    }else{
      return 'Editando certamen ' + this.items[0].idProducto};
  }

  setInputs(){
    this.nombreProducto = this.items !== null ? this.items[0].nombreprod : '';
    this.direccion = this.items !== null ? this.items[0].direccion : '';
    this.cantidad = this.items !== null ? this.items[0].cantidad : 0;
    this.selectedDate = this.items !== null || this.items !== "N/A" ? this.items[0].enfermedad : new Date().toISOString();
  }   

  dismissModal() {
    this.modalController.dismiss({close: true, entryCreated:this.entryCreated});
  }

  onDateChange(event: any) {
    console.log('Selected date:', this.selectedDate);
    // Additional logic for date selection
  }

  sendPutRequest() {
    const payload = {...this.items[0]};
    payload.nombreprod = this.nombreProducto;
    payload.direccion = this.direccion;

    this.http.post('https://sumativa2.onrender.com/api/productos/', payload)
      .subscribe(
        data => {
          this.entryCreated = true;
          this.presentToast('Se creó correctamente el evento')
        },
        error => this.presentToast(error.message),
      );
  }

  sendPostRequest() {

    let payload = {
      "codigo": this.type,
      "nombreprod": this.type,
      "precio": 0,
      "cantidad": this.cantidad,
      "rut": 0,
      "dv": "0",
      "enfermedad": this.selectedDate,
      "fonocontacto": 0,
      "categoria": "0",
      "editorial": "0",
      "raza": 0,
      "edad": 0,
      "altura": "0",
      "hrini": "0",
      "hrfin": "0",
      "direccion": this.direccion,
      "fechaNacimiento": this.selectedDate,
      "fCreacion": this.selectedDate
    };

    console.log(payload);

    this.http.post('https://sumativa2.onrender.com/api/productos/', payload)
      .subscribe(
        data => {
          this.entryCreated = true;
          this.presentToast('Se creó correctamente el evento')
        },
        error => this.presentToast(error.message),
      );
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1700,  // Duration in milliseconds
      position: 'top', // 'top', 'bottom', or 'middle'
      // other properties...
    });
    toast.present();

    toast.onDidDismiss().then(() => {
      if (this.entryCreated) {
          this.dismissModal();
      }
    });
  }
  
  checkForm(key : number){
    
    if(key === 1){
      this.checkNombreProducto = true;
    };
    if(key === 2){
      this.checkEvento = true;
    };
    if(key === 3){
      this.checkCantidad = true;
    };

    this.formDisabled = 
    this.type === '' || this.type.length < 1 
    ||  this.direccion === '' || this.cantidad === 0 || this.cantidad > 3;
  }
}
