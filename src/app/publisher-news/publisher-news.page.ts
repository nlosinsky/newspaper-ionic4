import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Article, Publisher } from '../models';
import { HelperService } from '../providers/helper.service';
import { NewsApiService } from '../providers/news-api.service';
import { WidgetUtilService } from '../providers/widget-util.service';

@Component({
  selector: 'app-publisher-news',
  templateUrl: './publisher-news.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublisherNewsPage implements OnInit {
  publisher: Publisher;
  showPageLoader = false;
  articles: Article[] = [];

  constructor(
    private storage: Storage,
    private apiService: NewsApiService,
    private widgetUtilService: WidgetUtilService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private helperService: HelperService
  ) {
  }

  ngOnInit() {
    this.loadArticleDetails();
  }

  private async loadArticleDetails() {
    this.showPageLoader = true;
    this.publisher = await this.storage.get('currentPublisher');
    if (!this.publisher) {
      this.showPageLoader = false;
      this.cd.markForCheck();
      return;
    }

    this.apiService.getPublisherTopHeadlines(this.publisher.pubcode)
      .pipe(
        catchError(error => {
          this.widgetUtilService.presentToast(error.statusText);
          return EMPTY;
        }),
        finalize(() => {
          this.showPageLoader = false;
          this.cd.markForCheck();
        })
      )
      .subscribe((resp: Article[]) => {
        this.articles = resp;
      });
  }

  onSaveArticle(article: Article) {
    this.helperService.onSaveArticle(article);
  }

  async onNewsDetailPage(article: Article) {
    await this.storage.set('currentArticle', article);
    this.router.navigate(['/news-detail']);
  }

}
