import { newE2EPage } from '@stencil/core/testing';

describe('bs-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-accordion></bs-accordion>');

    const element = await page.find('bs-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
