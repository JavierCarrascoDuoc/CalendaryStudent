import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userEmail: string = '';

  constructor(public alertController: AlertController, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        if (params && params['email']) {
            this.userEmail = params['email'];
        }
    });
  }

  async presentAlert(sectionName: string) {
    const alert = await this.alertController.create({
      header: 'No disponible',
      message: `La sección "${sectionName}" estará lista pronto`,
      buttons: ['CERRAR'],
    });

    alert.style.cssText = '--ion-background-color: linear-gradient(90deg, #fff7ad, #ffa9f9)';

    await alert.present();
  }
}
