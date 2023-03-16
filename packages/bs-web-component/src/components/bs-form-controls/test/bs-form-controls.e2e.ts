import { newE2EPage } from '@stencil/core/testing';

describe('bs-form-controls', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-form-controls></bs-form-controls>');

    const element = await page.find('bs-form-controls');
    expect(element).toHaveClass('hydrated');
  });
});
