import { newSpecPage } from '@stencil/core/testing';
import { BsCarousel } from '../bs-carousel';

describe('bs-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsCarousel],
      html: `<bs-carousel></bs-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-carousel>
    `);
  });
});
