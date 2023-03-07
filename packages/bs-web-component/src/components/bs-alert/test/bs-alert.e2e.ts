import { newE2EPage } from '@stencil/core/testing';

describe('bs-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-alert></bs-alert>');

    const element = await page.find('bs-alert');
    expect(element).toHaveClass('hydrated');
  });
});
