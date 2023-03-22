import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'bs-form-controls',
  styleUrl: 'bs-form-controls.scss',
  shadow: true,
})
export class BsFormControls {

  @Prop() label: string = null;

  @Prop() row: string = null;

  render() {
    return (
      <Host>
        <div class={
          `mb-3
          ${this.row ? this.row : ""}
          `
        }>
          <label class="form-label">{this.label}</label>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
