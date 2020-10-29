import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublisherDetailPage } from './publisher-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PublisherDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublisherDetailRoutingModule {}
