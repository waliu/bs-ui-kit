import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-list-group',
  styleUrl: 'bs-list-group.scss',
  shadow: true,
})
export class BsListGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
