import {Component} from '@angular/core';

@Component({
  selector: 'app-test-alert',
  templateUrl: './test-alert.component.html',
  styleUrls: ['./test-alert.component.scss']
})
export class TestAlertComponent {
  bsOnClose($event: any) {
    console.log("点击了关闭", $event)
  }
}
