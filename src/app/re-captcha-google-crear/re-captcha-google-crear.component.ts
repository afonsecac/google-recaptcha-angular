import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ReCaptchaRenderDirective} from "../re-captcha-render.directive";

@Component({
  selector: 'app-re-captcha-google-crear',
  templateUrl: './re-captcha-google-crear.component.html',
  styleUrls: ['./re-captcha-google-crear.component.css']
})
export class ReCaptchaGoogleCrearComponent implements OnInit {

  @Output('onCaptchaSubmit') onCaptchaSubmit: EventEmitter<any>;

  @Input('key') key: string;
  @Input('render') render: number;
  @Input('recaptchaId') recaptchaId: string;

  @ViewChild(ReCaptchaRenderDirective)
  recaptchaInst: ReCaptchaRenderDirective;

  constructor() { }

  ngOnInit() {
    this.onCaptchaSubmit = new EventEmitter();
    this.render = 2500;
    this.recaptchaId = 'grepcatcha';
  }

  recaptchaRestar() {
    if (this.recaptchaInst != null) {
      this.recaptchaInst.recaptchaRestar();
    }
  }

  onCaptchaSubmited(data: string) {
    if (data != null) {
      this.onCaptchaSubmit.emit({
          success: true,
          token: data,
          recaptcha: this
      });
    } else {
      this.onCaptchaSubmit.emit({
          success: false,
          token: null,
          recaptcha: this
      });
    }
  }

}
