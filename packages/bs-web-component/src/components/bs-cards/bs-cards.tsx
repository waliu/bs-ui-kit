import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'bs-cards',
  styleUrl: 'bs-cards.scss',
  shadow: true,
})
export class BsCards {

  /**
   * 主题色
   */
  @Prop() type: BSThemeType = null;
  /**
   * 边框颜色
   */
  @Prop() borderType: BSThemeType = null;
  /**
   * 字体颜色
   */
  @Prop() textType: BSThemeType = null;
  /**
   * 图片url
   */
  @Prop() thumb: string = null;
  /**
   * 页眉
   */
  @Prop() cardHeader: string = null;
  /**
   * 页脚
   */
  @Prop() cardFooter: string = null;
  /**
   * 文字方向：center居中；end：居右；
   */
  @Prop() direction: Direction = null;
  /**
   * 组件 class 样式
   */
  @Prop({attribute: 'class', reflect: true}) class: string = "";


  render() {
    return (
      <Host class={this.class}>
        <div class={
          `card
          ${this.type && this.type.length > 0 ? " text-bg-" + this.type : ''}
          ${this.textType && this.textType.length > 0 ? " text-" + this.textType : ''}
          ${this.borderType && this.borderType.length > 0 ? " border-" + this.borderType : ''}
          ${this.direction && this.direction.length > 0 ? 'text-' + this.direction : ''}`
        }>
          {this.cardHeader && this.cardHeader.length > 0 ? <div class="card-footer">{this.cardHeader}</div> : ''}
          {this.thumb && this.thumb.length > 0 ? <img src={this.thumb} class="card-img-top"/> : ''}
          <slot></slot>
          {this.cardFooter && this.cardFooter.length > 0 ? <div class="card-footer">{this.cardFooter}</div> : ''}
        </div>
      </Host>
    );
  }

}


export type BSThemeType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export type Direction = "" | "center" | "end";
