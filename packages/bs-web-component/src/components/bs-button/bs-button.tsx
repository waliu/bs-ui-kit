import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-button',
  styleUrl: 'bs-button.css',
  shadow: true,
})
export class BsButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
