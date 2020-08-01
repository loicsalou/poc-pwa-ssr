import {APP_ID, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ItemsService} from '../items.service';
import {tap} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';

@Component({
             selector: 'app-af-domain',
             templateUrl: './af-domain.component.html',
             styleUrls: ['./af-domain.component.scss']
           })
export class AfDomainComponent implements OnInit {
  items: any;

  constructor(private itemsService: ItemsService,
              @Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_ID) private appId: string) {
  }

  ngOnInit(): void {
  }

  clearItems(): void {
    this.items = undefined;
  }

  getItems(): void {
    this.itemsService.getUsers().pipe(
      tap(items => {
        const platform = isPlatformBrowser(this.platformId) ?
          'in the browser' : 'on the server';
        console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
      })
    ).subscribe(items => this.items = items,
                err => console.error(err)
    );
  }
}
