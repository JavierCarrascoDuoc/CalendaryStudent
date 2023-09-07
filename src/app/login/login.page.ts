import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userEmail: string = '';

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    
    // ... lógica de validación o inicio de sesión ...

    // Navega a la página 'home' pasando el email como parámetro
    this.navCtrl.navigateForward(['/home'], {
      queryParams: {
          email: this.userEmail
      }
  });
    
  }

}

