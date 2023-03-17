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
  /**
   * 是否为已读
   */
  @Prop() readonly: boolean = false;
  /**
   * 输入值
   */
  @Prop() value: string = null;
  /**
   * 文件上传多选，只有当 type等于file时生效
   */
  @Prop() multiple: boolean = false;

  render() {
    return (
      <Host>
        <input
          type={this.type}
          class={`
          form-control
          ${this.size ? " form-control-" + this.size : ""}
          `}
          readonly={this.readonly}
          disabled={this.disabled}
          placeholder={this.placeholder}
          value={this.value}
          multiple={this.multiple}
        />
      </Host>
    );
  }
}
