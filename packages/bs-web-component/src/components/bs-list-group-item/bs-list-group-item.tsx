import {Component, Host, h, Prop} from '@stencil/core';
import {BSThemeType} from "../../global/type-script/bs-type";

@Component({
  tag: 'bs-list-group-item',
  styleUrl: 'bs-list-group-item.scss',
  shadow: true,
})
export class BsListGroupItem {

  /**
   * 主题色
   */
  @Prop() type: BSThemeType = null;
  /**
   * 选中样式
   */
  @Prop() active: boolean = false;
  /**
   * 禁止选中样式
   */
  @Prop() disabled: boolean = false;
  /**
   * 组件 class 样式
   */
  @Prop({attribute: 'class', reflect: true}) class: string = "";

  render() {
    return (
      <Host class={this.class}>
        <li class={
          `list-group-item
           ${this.type && this.type.length > 0 ? 'list-group-item-' + this.type : ''}
           ${this.active ? 'active' : ''}
           ${this.disabled ? 'disabled' : ''}`
        }>
          <slot></slot>
        </li>
      </Host>
    );
  }

}
