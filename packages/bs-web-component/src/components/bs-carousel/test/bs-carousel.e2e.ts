import { newE2EPage } from '@stencil/core/testing';

describe('bs-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-carousel></bs-carousel>');

    const element = await page.find('bs-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
