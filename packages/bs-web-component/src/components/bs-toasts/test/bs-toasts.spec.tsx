import { newSpecPage } from '@stencil/core/testing';
import { BsToasts } from '../bs-toasts';

describe('bs-toasts', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsToasts],
      html: `<bs-toasts></bs-toasts>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-toasts>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-toasts>
    `);
  });
});
