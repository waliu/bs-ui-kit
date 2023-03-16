import { newE2EPage } from '@stencil/core/testing';

describe('bs-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-breadcrumb></bs-breadcrumb>');

    const element = await page.find('bs-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
