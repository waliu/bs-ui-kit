import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-accordion',
  styleUrl: 'bs-accordion.scss',
  shadow: true,
})
export class BsAccordion {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
