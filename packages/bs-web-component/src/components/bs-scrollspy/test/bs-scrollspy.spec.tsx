import { newSpecPage } from '@stencil/core/testing';
import { BsScrollspy } from '../bs-scrollspy';

describe('bs-scrollspy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsScrollspy],
      html: `<bs-scrollspy></bs-scrollspy>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-scrollspy>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-scrollspy>
    `);
  });
});
