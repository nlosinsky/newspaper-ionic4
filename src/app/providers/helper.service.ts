import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../models';
import { WidgetUtilService } from './widget-util.service';

@Injectable({providedIn: 'root'})
export class HelperService {
  constructor(
    private storage: Storage,
    private widgetUtilService: WidgetUtilService
  ) {
  }

  async onSaveArticle(article: Article) {
    const result  = await this.storage.get('savedArticles');
    if (!result) {
      await this.storage.set('savedArticles', [article]);
     return;
    }

    const isAlreadyExists = result.find(item => item.url === article.url);

    if (!isAlreadyExists) {
      result.push(article);
      await this.storage.set('savedArticles', result);
      this.widgetUtilService.presentToast('Article was saved successfully')
    }
  }
}
