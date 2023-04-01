import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-test-alert',
  templateUrl: './test-alert.component.html',
  styleUrls: ['./test-alert.component.scss']
})
export class TestAlertComponent {
  constructor(private sanitizer: DomSanitizer) {
  }

  tempC =
    `<bs-alert
     type="primary"
     [dismissible]="false"
     (bsOnClose)="bsOnClose($event)">
       <div>在啊</div>
     </bs-alert>`;

  bsOnClose($event: any) {
    console.log("点击了关闭", $event)
  }

  content!: SafeHtml;

  ngOnInit(): void {
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.tempC);
    console.log(this.tempC)
  }
}
