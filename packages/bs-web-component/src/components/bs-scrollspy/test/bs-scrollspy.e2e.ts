import { newE2EPage } from '@stencil/core/testing';

describe('bs-scrollspy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-scrollspy></bs-scrollspy>');

    const element = await page.find('bs-scrollspy');
    expect(element).toHaveClass('hydrated');
  });
});
