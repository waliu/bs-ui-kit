import {Component, Prop, h, Element} from '@stencil/core';
import {format} from '../../utils/utils';
// import * as echarts from 'echarts';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * 第一个名称
   */
  @Prop() first: string;

  /**
   * 最后一个名称
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  @Element() el: HTMLElement;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div id="main">Hello, World! I'm {this.getText()}</div>;
  }
}
