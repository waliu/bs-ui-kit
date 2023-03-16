import { newE2EPage } from '@stencil/core/testing';

describe('bs-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-cards></bs-cards>');

    const element = await page.find('bs-cards');
    expect(element).toHaveClass('hydrated');
  });
});
