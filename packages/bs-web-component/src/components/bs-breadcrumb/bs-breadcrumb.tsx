import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-breadcrumb',
  styleUrl: 'bs-breadcrumb.scss',
  shadow: true,
})
export class BsBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
