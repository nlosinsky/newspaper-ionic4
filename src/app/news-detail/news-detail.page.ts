import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../models';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsDetailPage implements OnInit {
  article: Article;
  showPageLoader = false;

  constructor(
    private storage: Storage,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.loadArticleDetails();
  }

  private async loadArticleDetails() {
    this.showPageLoader = true;
    this.article = await this.storage.get('currentArticle');
    this.showPageLoader = false;
    this.cd.markForCheck();
  }
}
