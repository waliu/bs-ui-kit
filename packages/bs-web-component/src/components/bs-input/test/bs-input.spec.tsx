import { newSpecPage } from '@stencil/core/testing';
import { BsInput } from '../bs-input';

describe('bs-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsInput],
      html: `<bs-input></bs-input>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-input>
    `);
  });
});
