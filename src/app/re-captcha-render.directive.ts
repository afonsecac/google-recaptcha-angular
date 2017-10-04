import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare var grecaptcha: any;

@Directive({
  selector: '[appReCaptchaRender]'
})
export class ReCaptchaRenderDirective implements OnInit {

  @Output('onCaptchaSubmit') onCaptchaSubmit: EventEmitter<any>;

  @Input('key') key: string;
  @Input('render') render: number;
  @Input('recaptchaId') recaptchaId: string;

  recaptchaRenderElm: any;

  constructor() { }

  ngOnInit() {
    this.key = null;
    this.render = 2500;
    this.recaptchaRenderElm = null;
    this.onCaptchaSubmit = new EventEmitter();
    setTimeout(() => {
      const recaptchaStyle = this.propertiesReCaptcha();
      const reCaptchaElm = document.getElementById(this.recaptchaId);

      const scripts = document.createElement('script');
      scripts.src = 'https://www.google.com/recaptcha/api.js';
      scripts.async = true;
      scripts.defer = true;

      const $this = this;
      scripts.onload = function () {
          setTimeout(function () {
             $this.recaptchaRenderElm = grecaptcha.render(reCaptchaElm, recaptchaStyle);
          }, 10);
      };
      document.getElementsByTagName('head')[0].appendChild(scripts);
    }, this.render);
  }

  recaptchaRestar() {
    this.recaptchaExpired();
  }

  propertiesReCaptcha() {
    let recaptchaProperties: any = {};
    recaptchaProperties['key'] = this.key;
    recaptchaProperties['callback'] = (data: string) => this.onCaptchaSubmit.emit(data);
    recaptchaProperties['expired-callback'] = () => this.recaptchaExpired();
    return recaptchaProperties;
  }

  recaptchaExpired() {
    if (this.recaptchaRenderElm === null) {
      return;
    }

    grecaptcha.reset(this.recaptchaRenderElm);
    this.onCaptchaSubmit.emit(null);
  }

}
