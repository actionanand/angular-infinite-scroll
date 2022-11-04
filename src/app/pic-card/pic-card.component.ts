import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { filter, map, pairwise, Subscription, throttleTime, timer } from 'rxjs';

@Component({
  selector: 'app-pic-card',
  templateUrl: './pic-card.component.html',
  styleUrls: ['./pic-card.component.scss']
})
export class PicCardComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('scroller')
  scroller!: CdkVirtualScrollViewport;

  listItems: any[] = [];
  myData = this.listItems;

  isLoading = false;

  maxItems = 300;

  unsub!: Subscription;
  timerSub!: Subscription;

  title = 'Infinite Scroll list using "ScrollingModule"';

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    this.unsub = this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(() => {
        (this.maxItems > this.listItems.length) && this.fetchMore();
      });
    })
  }

  ngOnInit(): void {
    this.fetchMore();
  }

  ngOnDestroy(): void {
    if(this.unsub) {
      this.unsub.unsubscribe();
    }

    this.timerSub.unsubscribe();
  }
  

  fetchMore(): void {

    const images = ['IuLgi9PWETU', 'fIq0tET6llw', 'xcBWeU4ybqs', 'YW3F-C5e8SE', 'H90Af2TFqng'];

    const newItems: any[] = [];
    for (let i = 0; i < 20; i++) {
      const randomListNumber = Math.round(Math.random() * 100);
      const randomPhotoId = Math.round(Math.random() * 4);
      newItems.push({
        title: 'List Item ' + randomListNumber,
        content: 'This is some description of the list - item # ' + randomListNumber,
        image: `https://source.unsplash.com/${images[randomPhotoId]}/50x50`
      });
    }

    this.isLoading = true;
    this.timerSub = timer(1000).subscribe(() => {
      this.isLoading = false;
      this.listItems = [...this.listItems, ...newItems];
      this.myData = this.listItems;
    });

  }

}
