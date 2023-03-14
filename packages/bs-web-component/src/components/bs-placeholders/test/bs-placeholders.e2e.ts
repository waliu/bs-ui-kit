import { newE2EPage } from '@stencil/core/testing';

describe('bs-placeholders', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-placeholders></bs-placeholders>');

    const element = await page.find('bs-placeholders');
    expect(element).toHaveClass('hydrated');
  });
});
