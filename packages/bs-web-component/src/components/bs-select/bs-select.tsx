import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-select',
  styleUrl: 'bs-select.scss',
  shadow: true,
})
export class BsSelect {

  render() {
    return (
      <Host>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <slot></slot>
      </Host>
    );
  }

}
