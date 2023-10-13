import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario } from '../usuario/model/Usuario';
import { UsuarioServiceService } from '../usuario/usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.page.html',
  styleUrls: ['./usuario-edit.page.scss'],
})
export class UsuarioEditPage implements OnInit {

  // FormGroup para validaciones
  userForm!: FormGroup;
  // Esquema a utilizar en el Html
  usuario: Usuario = { id: 1, nombre: '', apellido: '', email: '', clave: ''};
  id: any = '';
  //prod_name: string = '';
  //prod_desc: string = '';
  //prod_price:number=null;
  //prod_cantidad:number=null

  // Injectamos librerías
  constructor(public restApi: UsuarioServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    // Relizamos lectura
    this.getUsuario(this.route.snapshot.params['id']);
    // Especificamos Validaciones por medio de FormGroup
    this.userForm = this.formBuilder.group({
      'prod_name': [null, Validators.required],
      'prod_desc': [null, Validators.required],
      'prod_price': [null, Validators.required],
      'prod_cantidad': [null, Validators.required]
    });
  }
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.id)
    this.usuario.id = this.id;
    /*this.producto.nombre = form.prod_name;
    this.producto.descripcion = form.prod_desc;
    this.producto.precio = form.prod_price;
    this.producto.cantidad = form.prod_cantidad;
    */
    // si envio form, envio los nombres del campo del formulario
    //await this.restApi.updateProduct(this.id, form)
    await this.restApi.updateUsuario(this.id, this.usuario)
      .subscribe({
        next: (res) => {
          let id = res['id'];
          //this.router.navigate([ 'detail', { outlets: { details: id }} ]);
          this.router.navigate(['/usuario-detail/' + this.id]);
        }
        , complete: () => { }
        , error: (err) => { console.log(err); }
      })

  }

  // Método que permite leer el producto
  async getUsuario(id: number) {
    // Crea Wait
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      // Muestra Wait
      await loading.present();
      // Obtiene el Observable
      await this.restApi.getUsuario(id + "")
        .subscribe({
          next: (data) => {
            console.log("getProductID data****");
            console.log(data);
            // Si funciona Rescata el los datos
            this.id = data.id;
            // Actualiza los datos
            this.userForm.setValue({
              user_name: data.nombre,
              user_lastname: data.apellido,
              user_email: data.email,
              user_clave: data.clave
            });
            loading.dismiss();
          }
          , complete: () => { }
          , error: (err) => {
            console.log("getUsuarioID Errr****+");
            console.log(err);
            loading.dismiss();
          }
        })
    }
  

 // Método que actualiza el producto por medio de submit
  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            //Si funciona el actualizar navega a listar
            this.router.navigate(['/usuario-list/']);
          }
        }
      ]
    });
    await alert.present();
  }

}
