import {APP_ID, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {tap} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';
import {ItemsService} from '../items.service';
import {makeStateKey, TransferState} from '@angular/platform-browser';

const STATE_KEY_ITEMS = makeStateKey('items');

@Component({
             selector: 'app-home-page',
             templateUrl: './home-page.component.html',
             styleUrls: ['./home-page.component.scss']
           })
export class HomePageComponent implements OnInit {

  items = undefined;

  constructor(private itemsService: ItemsService,
              private state: TransferState,
              @Inject(PLATFORM_ID) private platformId: any,
              @Inject(APP_ID) private appId: string) {
  }

  ngOnInit(): void {
    this.items = this.state.get(STATE_KEY_ITEMS, undefined);
    if (!this.items) {
      this.itemsService.getUsers().pipe(
        tap(items => {
          const platform = isPlatformBrowser(this.platformId) ?
            'in the browser' : 'on the server';
          const date = new Date();
          console.log(`${date}: getUsers : Running ${platform} with appId=${this.appId}`);
        })
      ).subscribe(items => {
                    this.items = items;
                    this.state.set(STATE_KEY_ITEMS, this.items);
                  },
                  err => console.error(err)
      );
    }
  }
}
