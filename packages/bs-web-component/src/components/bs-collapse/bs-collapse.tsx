import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-collapse',
  styleUrl: 'bs-collapse.scss',
  shadow: true,
})
export class BsCollapse {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
