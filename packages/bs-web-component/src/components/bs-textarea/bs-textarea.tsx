import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'bs-textarea',
  styleUrl: 'bs-textarea.scss',
  shadow: true,
})
export class BsTextarea {
  /**
   * 提示文字
   */
  @Prop() placeholder: string = "";
  /**
   * 提示文字
   */
  @Prop() rows: number = 1;
  /**
   * 设置是否禁止
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <textarea
          class="form-control"
          placeholder={this.placeholder}
          rows={this.rows}
          disabled={this.disabled}
        >
        </textarea>
      </Host>
    );
  }

}
