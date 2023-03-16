import { newSpecPage } from '@stencil/core/testing';
import { BaNavbar } from '../ba-navbar';

describe('ba-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BaNavbar],
      html: `<ba-navbar></ba-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <ba-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ba-navbar>
    `);
  });
});
