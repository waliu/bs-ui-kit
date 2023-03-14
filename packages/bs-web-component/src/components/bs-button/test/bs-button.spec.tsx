import { newSpecPage } from '@stencil/core/testing';
import { BsButton } from '../bs-button';

describe('bs-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsButton],
      html: `<bs-button></bs-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-button>
    `);
  });
});
