import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PublisherDetailRoutingModule } from './publisher-detail-routing.module';
import { PublisherDetailPage } from './publisher-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublisherDetailRoutingModule
  ],
  declarations: [
    PublisherDetailPage
  ]
})
export class PublisherDetailModule {}
