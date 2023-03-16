import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-tooltips',
  styleUrl: 'bs-tooltips.scss',
  shadow: true,
})
export class BsTooltips {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
