import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'bs-input',
  styleUrl: 'bs-input.scss',
  shadow: true,
})
export class BsInput {
  /**
   * 类型
   */
  @Prop() type: string = null;
  /**
   * 输入前的提示内容
   */
  @Prop() placeholder: string = null;
  /**
   * 输入框的大小
   */
  @Prop() size: string = null;
  /**
   * 是否警用
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <input
          type={this.type}
          class={`
          form-control
          ${this.size ? " form-control-" + this.size : ""}
          `}
          disabled={this.disabled}
          placeholder={this.placeholder}
        />
      </Host>
    );
  }
}
