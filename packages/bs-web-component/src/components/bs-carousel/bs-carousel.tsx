import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-carousel',
  styleUrl: 'bs-carousel.scss',
  shadow: true,
})
export class BsCarousel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
