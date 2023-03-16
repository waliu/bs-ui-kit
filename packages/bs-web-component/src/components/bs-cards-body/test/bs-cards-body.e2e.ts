import { newE2EPage } from '@stencil/core/testing';

describe('bs-cards-body', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-cards-body></bs-cards-body>');

    const element = await page.find('bs-cards-body');
    expect(element).toHaveClass('hydrated');
  });
});
