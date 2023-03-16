import { newE2EPage } from '@stencil/core/testing';

describe('bs-toasts', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-toasts></bs-toasts>');

    const element = await page.find('bs-toasts');
    expect(element).toHaveClass('hydrated');
  });
});
