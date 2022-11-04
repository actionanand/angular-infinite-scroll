import { AfterViewInit, ChangeDetectionStrategy, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { filter, map, pairwise, Subscription, throttleTime, timer } from 'rxjs';
// import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-mat-table-infinite',
  templateUrl: './mat-table-infinite.component.html',
  styleUrls: ['./mat-table-infinite.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MatTableInfiniteComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('scroller')
  scroller!: CdkVirtualScrollViewport;

  listItems: PeriodicElement[] = [];

  loading = false;

  maxItems = 100;

  unsub!: Subscription;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  title = 'Infinite Scroll Mat-Table using "ScrollingModule"';

  // dataSource = new MatTableDataSource<PeriodicElement>();
  
  dataSource: PeriodicElement[] = [];
  

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
  }
  

  fetchMore(): void  {

    const newItems: any[] = [];
    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      newItems.push(ELEMENT_DATA[i]);
    }


    this.loading = true;
    timer(1000).subscribe(() => {
      this.loading = false;
      this.listItems = [...this.listItems, ...newItems];
      this.dataSource = this.listItems;
    });
    
  }

}
