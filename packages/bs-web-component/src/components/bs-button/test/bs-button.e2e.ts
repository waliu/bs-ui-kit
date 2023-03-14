import { newE2EPage } from '@stencil/core/testing';

describe('bs-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-button></bs-button>');

    const element = await page.find('bs-button');
    expect(element).toHaveClass('hydrated');
  });
});
