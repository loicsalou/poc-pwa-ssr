import {APP_ID, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {tap} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';
import {ItemsService} from '../items.service';

@Component({
             selector: 'app-home-page',
             templateUrl: './home-page.component.html',
             styleUrls: ['./home-page.component.scss']
           })
export class HomePageComponent implements OnInit {

  items: any;

  constructor(private itemsService: ItemsService,
              @Inject(PLATFORM_ID) private platformId: any,
              @Inject(APP_ID) private appId: string) {
  }

  ngOnInit(): void {
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
