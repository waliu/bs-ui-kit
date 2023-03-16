import { newE2EPage } from '@stencil/core/testing';

describe('bs-popovers', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-popovers></bs-popovers>');

    const element = await page.find('bs-popovers');
    expect(element).toHaveClass('hydrated');
  });
});
