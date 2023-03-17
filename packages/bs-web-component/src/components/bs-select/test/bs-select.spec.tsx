import { newSpecPage } from '@stencil/core/testing';
import { BsSelect } from '../bs-select';

describe('bs-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsSelect],
      html: `<bs-select></bs-select>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-select>
    `);
  });
});
