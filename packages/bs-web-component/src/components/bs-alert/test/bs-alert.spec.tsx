import { newSpecPage } from '@stencil/core/testing';
import { BsAlert } from '../bs-alert';

describe('bs-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsAlert],
      html: `<bs-alert></bs-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-alert>
    `);
  });
});
