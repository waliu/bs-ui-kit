import { newE2EPage } from '@stencil/core/testing';

describe('bs-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-input></bs-input>');

    const element = await page.find('bs-input');
    expect(element).toHaveClass('hydrated');
  });
});
