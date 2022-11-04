import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableInfiniteComponent } from './mat-table-infinite.component';

describe('MatTableInfiniteComponent', () => {
  let component: MatTableInfiniteComponent;
  let fixture: ComponentFixture<MatTableInfiniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableInfiniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableInfiniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
