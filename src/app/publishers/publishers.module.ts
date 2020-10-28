import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PublishersComponent } from './publishers.component';


@NgModule({
  declarations: [
    PublishersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PublishersComponent
      }
    ]),
    IonicModule
  ]
})
export class PublishersModule { }
