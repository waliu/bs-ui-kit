import { newSpecPage } from '@stencil/core/testing';
import { BsCollapse } from '../bs-collapse';

describe('bs-collapse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsCollapse],
      html: `<bs-collapse></bs-collapse>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-collapse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-collapse>
    `);
  });
});
