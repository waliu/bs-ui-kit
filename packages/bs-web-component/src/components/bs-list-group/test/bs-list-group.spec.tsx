import { newSpecPage } from '@stencil/core/testing';
import { BsListGroup } from '../bs-list-group';

describe('bs-list-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsListGroup],
      html: `<bs-list-group></bs-list-group>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-list-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-list-group>
    `);
  });
});
