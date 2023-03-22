import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bs-collapse',
  styleUrl: 'bs-collapse.scss',
  shadow: true,
})
export class BsCollapse {

  render() {
    return (
      <Host>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Link with href
          </a>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
