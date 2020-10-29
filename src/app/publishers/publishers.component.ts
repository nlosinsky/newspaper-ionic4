import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PUBLISHERS } from '../mock-data/mock-publishers';
import { Publisher } from '../models';

@Component({
  selector: 'app-publishers',
  templateUrl: 'publishers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublishersComponent implements OnInit {
  publishers: Publisher[] = PUBLISHERS;
  showPageLoader = false;

  constructor(
    private router: Router,
    private storage: Storage
  ) {
  }

  ngOnInit() {
  }

  async onPublisherDetailPage(publisher: Publisher) {
    await this.storage.set('currentPublisher', publisher);
    this.router.navigate(['/publisher-detail']);
  }
}
