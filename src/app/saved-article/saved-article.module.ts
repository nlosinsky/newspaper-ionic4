import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SavedArticleRoutingModule } from './saved-article-routing.module';
import { SavedArticlePage } from './saved-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedArticleRoutingModule
  ],
  declarations: [SavedArticlePage]
})
export class SavedArticleModule {}
