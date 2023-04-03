import { newSpecPage } from '@stencil/core/testing';
import { BsCheckbox } from '../bs-checkbox';

describe('bs-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsCheckbox],
      html: `<bs-checkbox></bs-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-checkbox>
    `);
  });
});
