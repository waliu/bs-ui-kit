import {Component, Host, h} from '@stencil/core';

@Component({
  tag: 'bs-cards',
  styleUrl: 'bs-cards.scss',
  shadow: true,
})
export class BsCards {

  render() {
    return (
      <Host>
        <div class="card">
          <img src='.' class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
