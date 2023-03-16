import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-toasts',
  styleUrl: 'bs-toasts.scss',
  shadow: true,
})
export class BsToasts {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
