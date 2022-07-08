import NProgress from 'accessible-nprogress';
import 'accessible-nprogress/dist/accessible-nprogress.min.css';

NProgress.configure({
  minimum: 0.3,
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  easing: 'ease',
});

export class Progress {
  private static isEnable = true;

  static start() {
    if (this.isEnable) {
      NProgress.start();
    }
  }

  static done() {
    if (this.isEnable) {
      NProgress.done();
    }
  }
}
