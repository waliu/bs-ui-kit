import { newSpecPage } from '@stencil/core/testing';
import { BsPopovers } from '../bs-popovers';

describe('bs-popovers', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsPopovers],
      html: `<bs-popovers></bs-popovers>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-popovers>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-popovers>
    `);
  });
});
