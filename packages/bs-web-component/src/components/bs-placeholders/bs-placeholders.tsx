import {Component, Host, h} from '@stencil/core';

@Component({
  tag: 'bs-placeholders',
  styleUrl: 'bs-placeholders.scss',
  shadow: true,
})
export class BsPlaceholders {

  render() {
    return (
      <Host>
        <div class="card" aria-hidden="true">
          <img src="" class="card-img-top" alt=""/>
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
