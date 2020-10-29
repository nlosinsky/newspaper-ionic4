import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PublisherNewsRoutingModule } from './publisher-news-routing.module';
import { PublisherNewsPage } from './publisher-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublisherNewsRoutingModule
  ],
  declarations: [
    PublisherNewsPage
  ]
})
export class PublisherNewsModule {}
