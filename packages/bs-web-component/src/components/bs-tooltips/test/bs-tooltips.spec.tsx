import { newSpecPage } from '@stencil/core/testing';
import { BsTooltips } from '../bs-tooltips';

describe('bs-tooltips', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsTooltips],
      html: `<bs-tooltips></bs-tooltips>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-tooltips>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-tooltips>
    `);
  });
});
