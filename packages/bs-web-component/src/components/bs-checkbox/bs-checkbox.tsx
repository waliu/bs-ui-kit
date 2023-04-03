import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'bs-checkbox',
  styleUrl: 'bs-checkbox.scss',
  shadow: true,
})
export class BsCheckbox {
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
  /**
   * 是否为已读
   */
  @Prop() readonly: boolean = false;
  /**
   * 输入值
   */
  @Prop() value: string = null;
  /**
   * 文本内容
   */
  @Prop() label: string = null;
  /**
   * id.
   *
   */
  @Prop() id: string = null;

  render() {
    return (
      <Host>
        <input
          class="form-check-input"
          type="checkbox"
          value={this.value}
          id={this.id}
          disabled={this.disabled}
        />
        <label class="form-check-label">
          {this.label}
        </label>
        <slot></slot>
      </Host>
    );
  }

}
