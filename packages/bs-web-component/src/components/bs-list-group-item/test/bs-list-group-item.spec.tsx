import { newSpecPage } from '@stencil/core/testing';
import { BsListGroupItem } from '../bs-list-group-item';

describe('bs-list-group-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsListGroupItem],
      html: `<bs-list-group-item></bs-list-group-item>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-list-group-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-list-group-item>
    `);
  });
});
