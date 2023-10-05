import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import { Animation } from '@ionic/angular';




@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
private animation!: Animation;


  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }
  play() {
    this.animation.play();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
     
      this.router.navigate(['/home']);
    }
  }
}
