import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../models';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html'
})
export class NewsDetailPage implements OnInit {
  article: Article;
  showPageLoader = false;

  constructor(
    private storage: Storage
  ) {
  }

  ngOnInit() {
    this.loadArticleDetails();
  }

  private async loadArticleDetails() {
    this.showPageLoader = true;
    this.article = await this.storage.get('currentArticle');
    this.showPageLoader = false;
    console.log(this.article);
  }

}
