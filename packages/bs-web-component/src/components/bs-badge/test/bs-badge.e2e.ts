import { newE2EPage } from '@stencil/core/testing';

describe('bs-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-badge></bs-badge>');

    const element = await page.find('bs-badge');
    expect(element).toHaveClass('hydrated');
  });
});
