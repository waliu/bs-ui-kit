import {Component, Host, h, Prop} from '@stencil/core';
import {BSThemeType} from "../../global/type-script/bs-type";


@Component({
  tag: 'bs-badge',
  styleUrl: 'bs-badge.scss',
  shadow: true,
})
export class BsBadge {
  /**
   * 主题色
   */
  @Prop() type: BSThemeType = null;

  render() {
    return (
      <Host>
        <span class={`
          badge
          ${this.type ? " text-bg-" + this.type : ""}
        `}>
           <slot></slot>
        </span>
      </Host>
    );
  }

}
