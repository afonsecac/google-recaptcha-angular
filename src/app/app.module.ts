import { NgModule } from '@angular/core';
import { ReCaptchaRenderDirective } from './re-captcha-render.directive';
import { ReCaptchaGoogleCrearComponent } from './re-captcha-google-crear/re-captcha-google-crear.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReCaptchaRenderDirective, ReCaptchaGoogleCrearComponent],
  exports: [ReCaptchaGoogleCrearComponent, ReCaptchaRenderDirective]
})
export class GoogleReCaptchaAngularModule { }
