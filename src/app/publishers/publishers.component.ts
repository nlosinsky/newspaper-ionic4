import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor() {
  }

  ngOnInit() {
  }
}
