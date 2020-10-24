import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Article, ArticlesResp } from '../models';

@Injectable({providedIn: 'root'})
export class NewsApiService {
  readonly baseUrl = environment.baseUrl;
  readonly apiKey = environment.apiKey;

  constructor(
    private http: HttpClient
  ) {
  }

  getTopHeadlines(countryCode: string, category: string): Observable<Article[]> {
    const params = {
      country: countryCode,
      apiKey: this.apiKey
    };

    if (category !== 'all') {
      params['category'] = category;
    }

    return this.http.get<ArticlesResp>(this.baseUrl + '/top-headlines', {params})
      .pipe(
        map(resp => resp.articles)
      );
  }
}
