import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class WidgetUtilService {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async presentAlertConfirm(header, message, buttons) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });

    await alert.present();
  }
}
