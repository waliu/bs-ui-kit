import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-scrollspy',
  styleUrl: 'bs-scrollspy.scss',
  shadow: true,
})
export class BsScrollspy {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
