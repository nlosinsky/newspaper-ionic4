import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class WidgetUtilService {

  constructor(
    private toastController: ToastController
  ) {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
