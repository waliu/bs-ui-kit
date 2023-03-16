import { newSpecPage } from '@stencil/core/testing';
import { BsSpinners } from '../bs-spinners';

describe('bs-spinners', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsSpinners],
      html: `<bs-spinners></bs-spinners>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-spinners>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-spinners>
    `);
  });
});
