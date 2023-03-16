import { newSpecPage } from '@stencil/core/testing';
import { BsCardsBody } from '../bs-cards-body';

describe('bs-cards-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsCardsBody],
      html: `<bs-cards-body></bs-cards-body>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-cards-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-cards-body>
    `);
  });
});
