import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Article } from '../models';
import { WidgetUtilService } from '../providers/widget-util.service';

@Component({
  selector: 'app-saved-article',
  templateUrl: './saved-article.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SavedArticlePage implements OnInit {
  articles: Article[] = [];
  showPageLoader = false;

  constructor(
    private storage: Storage,
    private cd: ChangeDetectorRef,
    private router: Router,
    private widgetUtilService: WidgetUtilService
  ) {
  }

  ngOnInit() {
    this.loadArticles();
  }

  async loadArticles() {
    this.showPageLoader = true;
    const result = await this.storage.get('savedArticles');
    if (result) {
      this.articles = result;
    }

    this.showPageLoader = false;
    this.cd.markForCheck();
  }

  doRefresh(event) {
    this.loadArticles();
    setTimeout(() => {
      event.target.complete()
    }, 2000);
  }

  onRemove(index: number) {
    this.widgetUtilService.presentAlertConfirm(
      'Confirm',
      'Are you sure you want to delete this article?',
      [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {

        }
      }, {
        text: 'Ok',
        handler: async () => {

          const articles = this.articles.filter((item, i) => i != index);
          this.articles = articles;
          await this.storage.set('savedArticles', articles);
          this.cd.markForCheck();
          this.widgetUtilService.presentToast('Article Removed Successfully');
        }
      }
      ]
    )
  }

  async onNewsDetailPage(article: Article) {
    await this.storage.set('currentArticle', article);
    this.router.navigate(['/news-detail']);
  }
}
