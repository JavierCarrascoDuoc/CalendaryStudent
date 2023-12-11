import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  userEmail: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() {}

  onSubmit(form: any) {
    // Aquí puedes usar 'form' para acceder a los valores del formulario
    console.log(form.value);
  }
  

  // Puedes agregar más métodos según sea necesario
}
