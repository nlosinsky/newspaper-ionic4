import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { CATEGORIES } from '../mock-data/mock-categories';
import { COUNTRIES } from '../mock-data/mock-countries';
import { Article, Category, Country } from '../models';
import { HelperService } from '../providers/helper.service';
import { NewsApiService } from '../providers/news-api.service';
import { WidgetUtilService } from '../providers/widget-util.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  showPageLoader = false;
  selectedCountry: Country;
  selectedCategory: Category;

  readonly countries: Country[] = COUNTRIES;
  readonly categories: Category[] = CATEGORIES;

  constructor(
    private apiService: NewsApiService,
    private cd: ChangeDetectorRef,
    private widgetUtilService: WidgetUtilService,
    private router: Router,
    private storage: Storage,
    private helperService: HelperService
  ) {
  }

  ngOnInit() {
    this.selectedCountry = this.countries[0];
    this.selectedCategory = this.categories[0];
    this.loadHeadlines();
  }

  onSelectCountry() {
    this.loadHeadlines();
  }

  onSelectCategory() {
    this.loadHeadlines();
  }

  doRefresh(event) {
    this.loadHeadlines();
    setTimeout(() => {
      event.target.complete()
    }, 2000);
  }

  onSaveArticle(article: Article) {
    this.helperService.onSaveArticle(article);
  }

  async onNewsDetailPage(article: Article) {
    await this.storage.set('currentArticle', article);
    this.router.navigate(['/news-detail']);
  }

  private loadHeadlines() {
    this.showPageLoader = true;
    this.apiService.getTopHeadlines(this.selectedCountry.code, this.selectedCategory.id)
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
        this.articles = resp.filter(item => item.urlToImage);
      });
  }
}
