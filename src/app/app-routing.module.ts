import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  },

  {
    path: 'publishers',
    loadChildren: './publishers/publishers.module#PublishersModule'
  },
  {
    path: 'publisher-news',
    loadChildren: () => import('./publisher-news/publisher-news.module').then(m => m.PublisherNewsModule)
  },
  {
    path: 'saved-article',
    loadChildren: () => import('./saved-article/saved-article.module').then( m => m.SavedArticleModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
