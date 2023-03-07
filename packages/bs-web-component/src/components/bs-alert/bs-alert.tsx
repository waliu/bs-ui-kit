import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-alert',
  styleUrl: 'bs-alert.css',
  shadow: true,
})
export class BsAlert {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
