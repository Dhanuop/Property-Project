import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperyListComponent } from './propery-list.component';

describe('ProperyListComponent', () => {
  let component: ProperyListComponent;
  let fixture: ComponentFixture<ProperyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProperyListComponent]
    });
    fixture = TestBed.createComponent(ProperyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
