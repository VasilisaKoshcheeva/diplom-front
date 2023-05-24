import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegauthComponent } from './regauth.component';

describe('RegauthComponent', () => {
  let component: RegauthComponent;
  let fixture: ComponentFixture<RegauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegauthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
