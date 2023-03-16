import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-form-controls',
  styleUrl: 'bs-form-controls.scss',
  shadow: true,
})
export class BsFormControls {

  render() {
    return (
      <Host>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
