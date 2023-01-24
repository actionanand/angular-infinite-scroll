import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef } from '@angular/core';

import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Subject } from 'rxjs';

import { MatTableInfiniteComponent } from './mat-table-infinite.component';

class MockChangeDetectorRefClass extends ChangeDetectorRef {
  markForCheck(): void {}
  detach(): void {}
  detectChanges(): void {}
  checkNoChanges(): void {}
  reattach(): void {}
}

class MockCdkVirtualScrollViewport extends CdkVirtualScrollViewport {
  // @Input() itemSize = '140';
  override scrolledIndexChange: Subject<number> = new Subject<number>();
  // elementScrolled: Subject<Event> = new Subject<Event>();
  override setRenderedRange(): void {}
  override getRenderedRange(): any {}

  // static itemSize = 130;
  // add any other properties and methods that are needed for your test
}

fdescribe('MatTableInfiniteComponent', () => {
  let component: MatTableInfiniteComponent;
  let fixture: ComponentFixture<MatTableInfiniteComponent>;
  let changeDetectorRef: ChangeDetectorRef;
  let virtualScrollViewport: CdkVirtualScrollViewport;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatTableInfiniteComponent],
      imports: [HttpClientTestingModule, ScrollingModule, MatToolbarModule],
      providers: [
        {
          provide: ChangeDetectorRef,
          useClass: MockChangeDetectorRefClass,
        },
        {
          provide: CdkVirtualScrollViewport,
          useClass: MockCdkVirtualScrollViewport,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MatTableInfiniteComponent);

    changeDetectorRef = TestBed.inject(ChangeDetectorRef);
    virtualScrollViewport = TestBed.inject(CdkVirtualScrollViewport);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check \'ngAfterViewInit\'', () => {
    component.ngAfterViewInit();
    changeDetectorRef.detectChanges();
    spyOn(virtualScrollViewport, 'elementScrolled').and.callThrough();
    expect(virtualScrollViewport.elementScrolled).toHaveBeenCalled();
  });
});
