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

  componentDidLoad() {
    //获取dom元素
    // const elementInShadowDom = this.el.shadowRoot.querySelector('#main');
    // //显示表格
    // let myChart = echarts.init(elementInShadowDom as HTMLElement);
    // // 绘制图表
    // myChart.setOption({
    //   title: {
    //     text: 'ECharts 入门示例'
    //   },
    //   tooltip: {},
    //   xAxis: {
    //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: '销量',
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }
    //   ]
    // });
  }

  render() {
    return <div id="main">Hello, World! I'm {this.getText()}</div>;
    // return <div id="main"></div>;
  }
}
