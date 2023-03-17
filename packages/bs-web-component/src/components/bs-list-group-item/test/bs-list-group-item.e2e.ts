import { newE2EPage } from '@stencil/core/testing';

describe('bs-list-group-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-list-group-item></bs-list-group-item>');

    const element = await page.find('bs-list-group-item');
    expect(element).toHaveClass('hydrated');
  });
});
