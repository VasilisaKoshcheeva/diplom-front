import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdomenComponent } from './selectdomen.component';

describe('SelectdomenComponent', () => {
  let component: SelectdomenComponent;
  let fixture: ComponentFixture<SelectdomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectdomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectdomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
