import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-badge',
  styleUrl: 'bs-badge.scss',
  shadow: true,
})
export class BsBadge {

  render() {
    return (
      <Host>
        <span class="badge text-bg-secondary">
           <slot></slot>
        </span>
      </Host>
    );
  }

}
