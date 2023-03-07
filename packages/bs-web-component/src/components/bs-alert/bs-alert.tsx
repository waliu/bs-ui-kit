import { Component, h } from '@stencil/core';

@Component({
  tag: 'bs-alert',
  styleUrl: 'bs-alert.css',
  shadow: false,
})
export class BsAlert {

  render() {
    return (
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    );
  }

}
