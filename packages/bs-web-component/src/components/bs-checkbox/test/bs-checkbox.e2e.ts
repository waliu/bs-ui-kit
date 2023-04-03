import { newE2EPage } from '@stencil/core/testing';

describe('bs-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-checkbox></bs-checkbox>');

    const element = await page.find('bs-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
