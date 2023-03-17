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

  render() {
    return (
      <Host>
        <li class={
          `list-group-item
           ${this.type && this.type.length > 0 ? 'list-group-item' + this.type : ''}`
        }>
          <slot></slot>
        </li>
      </Host>
    );
  }

}
