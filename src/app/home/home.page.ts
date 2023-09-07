import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(public alertController: AlertController) {}

  async presentAlert(sectionName: string) {
    const alert = await this.alertController.create({
      header: 'No disponible',
      message: `La sección "${sectionName}" estara lista pronto`,
      buttons: ['CERRAR'],
      
    });

    alert.style.cssText = '--ion-background-color: linear-gradient(90deg, #fff7ad, #ffa9f9)';

    await alert.present();
  }
}
