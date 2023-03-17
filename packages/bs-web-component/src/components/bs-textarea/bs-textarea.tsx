import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-textarea',
  styleUrl: 'bs-textarea.scss',
  shadow: true,
})
export class BsTextarea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
