import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userEmail: string = '';

  constructor(private router: Router, private navCtrl: NavController, private storage: Storage) { 
    this.init();
  }

  async init() {
    await this.storage.create();
    await this.storage.set('email', null);
  }

  async setString(value: string) {
    await this.storage.set('email', value);
  }

  ngOnInit() {
  }


  validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  onSubmit(form: NgForm) {
    
    // ... lógica de validación o inicio de sesión ...
    if(form.form.status === 'VALID' && this.validateEmail(this.userEmail)){
      this.setString(this.userEmail);
      this.navCtrl.navigateForward(['/home'], {
        queryParams: {
            email: this.userEmail
        }
    });
    }    
  }
}
