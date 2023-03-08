import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bs-web-app-angular';
  options = {
    message: "A simple primary alert—check it out!",
    type:"primary",
    dismissible: false
  }

  bsOnClose($event:any) {
    console.log("点击了关闭",$event)
  }
}
