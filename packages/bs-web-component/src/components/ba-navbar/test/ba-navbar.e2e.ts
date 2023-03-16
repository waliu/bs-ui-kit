import { newE2EPage } from '@stencil/core/testing';

describe('ba-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ba-navbar></ba-navbar>');

    const element = await page.find('ba-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
