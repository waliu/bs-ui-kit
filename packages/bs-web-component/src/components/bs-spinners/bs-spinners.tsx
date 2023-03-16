import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-spinners',
  styleUrl: 'bs-spinners.scss',
  shadow: true,
})
export class BsSpinners {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
