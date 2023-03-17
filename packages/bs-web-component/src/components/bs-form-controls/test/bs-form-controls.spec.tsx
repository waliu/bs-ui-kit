import { newSpecPage } from '@stencil/core/testing';
import { BsFormControls } from '../bs-form-controls';

describe('bs-form-controls', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsFormControls],
      html: `<bs-form-controls></bs-form-controls>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-form-controls>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-form-controls>
    `);
  });
});
