import { newSpecPage } from '@stencil/core/testing';
import { BsPagination } from '../bs-pagination';

describe('bs-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsPagination],
      html: `<bs-pagination></bs-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-pagination>
    `);
  });
});
