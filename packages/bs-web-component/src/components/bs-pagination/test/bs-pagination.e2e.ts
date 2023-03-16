import { newE2EPage } from '@stencil/core/testing';

describe('bs-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-pagination></bs-pagination>');

    const element = await page.find('bs-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
