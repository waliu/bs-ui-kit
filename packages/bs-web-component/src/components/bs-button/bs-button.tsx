import {Component, Host, h, Prop} from '@stencil/core';
import {BSThemeType} from "../bs-alert/bs-alert";

@Component({
  tag: 'bs-button',
  styleUrl: 'bs-button.scss',
  shadow: true,
})
export class BsButton {
  /**
   * 主题色
   */
  @Prop() type: BSThemeType = null;
  /**
   * 样式
   */
  @Prop() outline: boolean = false;
  /**
   * 大小
   */
  @Prop() size: BSSizeType = null;
  /**
   * 是否为禁用状态
   */
  @Prop() disabled: boolean = false;
  /**
   * 组件 class 样式
   */
  @Prop({attribute: 'class', reflect: true}) class: string = "";

  render() {
    return (
      <Host class={this.class}>
        <button
          type="button"
          class={`btn
          ${this.type ? " btn-" + this.type : ""}
          ${this.outline ? " btn-outline-" + this.type : ""}
          ${this.size ? " btn-" + this.size : ""}
          `}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }

}

export type BSSizeType = "lg" | "sm";
