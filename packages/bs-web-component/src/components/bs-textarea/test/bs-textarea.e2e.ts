import { newE2EPage } from '@stencil/core/testing';

describe('bs-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-textarea></bs-textarea>');

    const element = await page.find('bs-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
