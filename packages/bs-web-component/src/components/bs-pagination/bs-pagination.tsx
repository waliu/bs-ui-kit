import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-pagination',
  styleUrl: 'bs-pagination.scss',
  shadow: true,
})
export class BsPagination {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
