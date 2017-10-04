import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchaGoogleCrearComponent } from './re-captcha-google-crear.component';

describe('ReCaptchaGoogleCrearComponent', () => {
  let component: ReCaptchaGoogleCrearComponent;
  let fixture: ComponentFixture<ReCaptchaGoogleCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReCaptchaGoogleCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReCaptchaGoogleCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
