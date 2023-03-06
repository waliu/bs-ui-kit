import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsWebComponentNgComponent } from './bs-web-component-ng.component';

describe('BsWebComponentNgComponent', () => {
  let component: BsWebComponentNgComponent;
  let fixture: ComponentFixture<BsWebComponentNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsWebComponentNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsWebComponentNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
