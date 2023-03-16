import { newSpecPage } from '@stencil/core/testing';
import { BsCards } from '../bs-cards';

describe('bs-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsCards],
      html: `<bs-cards></bs-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-cards>
    `);
  });
});
