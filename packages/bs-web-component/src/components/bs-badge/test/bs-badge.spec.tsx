import { newSpecPage } from '@stencil/core/testing';
import { BsBadge } from '../bs-badge';

describe('bs-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsBadge],
      html: `<bs-badge></bs-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-badge>
    `);
  });
});
