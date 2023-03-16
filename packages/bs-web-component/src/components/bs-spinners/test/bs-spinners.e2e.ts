import { newE2EPage } from '@stencil/core/testing';

describe('bs-spinners', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-spinners></bs-spinners>');

    const element = await page.find('bs-spinners');
    expect(element).toHaveClass('hydrated');
  });
});
