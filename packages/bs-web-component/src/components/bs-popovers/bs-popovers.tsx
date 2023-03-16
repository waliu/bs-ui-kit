import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-popovers',
  styleUrl: 'bs-popovers.scss',
  shadow: true,
})
export class BsPopovers {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
