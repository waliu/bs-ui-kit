import { newSpecPage } from '@stencil/core/testing';
import { BsAccordion } from '../bs-accordion';

describe('bs-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsAccordion],
      html: `<bs-accordion></bs-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-accordion>
    `);
  });
});
