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

  render() {
    return (
      <Host>
        <input
          type={this.type}
          class="form-control"
          placeholder={this.placeholder}
        />
      </Host>
    );
  }
}
