import { newSpecPage } from '@stencil/core/testing';
import { BsPlaceholders } from '../bs-placeholders';

describe('bs-placeholders', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsPlaceholders],
      html: `<bs-placeholders></bs-placeholders>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-placeholders>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-placeholders>
    `);
  });
});
