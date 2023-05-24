import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectshablonComponent } from './selectshablon.component';

describe('SelectshablonComponent', () => {
  let component: SelectshablonComponent;
  let fixture: ComponentFixture<SelectshablonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectshablonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectshablonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
