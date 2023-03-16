import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ba-navbar',
  styleUrl: 'ba-navbar.scss',
  shadow: true,
})
export class BaNavbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
