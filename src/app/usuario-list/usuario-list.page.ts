import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Usuario } from '../usuario/model/Usuario';
import { UsuarioServiceService } from '../usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
})
export class UsuarioListPage implements OnInit {

  // Creamos la Variable para el Html
  usuarios: Usuario[] = [];
  // Injectamos Librerias
  constructor(public restApi: UsuarioServiceService
    , public loadingController: LoadingController
    , public router: Router) { }

  // LLamamos al método que rescata los productos  
  ngOnInit() {
    this.getUsuarios();
  }

  // Método  que rescta los productos
  async getUsuarios() {
    console.log("Entrando :getUsuarios");
    // Crea un Wait (Esperar)
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });
    // Muestra el Wait
    await loading.present();
    console.log("Entrando :");
    // Obtiene el Observable del servicio
    await this.restApi.getUsuarios()
      .subscribe({
        next: (res) => { 
          console.log("Res:" + res);
  // Si funciona asigno el resultado al arreglo productos
          this.usuarios = res;
          console.log("thisUsuarios:",this.usuarios);
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
  // Si da error, imprimo en consola.
          console.log("Err:" + err);
          loading.dismiss();
        }
      })
  }


  
  // drop(event: CdkDragDrop<string[]>) {
  //   console.log("Moviendo Item Array Drop ***************:");
  //   moveItemInArray(this.productos, event.previousIndex, event.currentIndex);
  // }
}
