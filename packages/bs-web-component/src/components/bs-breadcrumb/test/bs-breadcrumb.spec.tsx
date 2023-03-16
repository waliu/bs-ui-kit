import { newSpecPage } from '@stencil/core/testing';
import { BsBreadcrumb } from '../bs-breadcrumb';

describe('bs-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsBreadcrumb],
      html: `<bs-breadcrumb></bs-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-breadcrumb>
    `);
  });
});
