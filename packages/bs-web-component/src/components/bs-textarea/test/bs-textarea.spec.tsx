import { newSpecPage } from '@stencil/core/testing';
import { BsTextarea } from '../bs-textarea';

describe('bs-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsTextarea],
      html: `<bs-textarea></bs-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-textarea>
    `);
  });
});
