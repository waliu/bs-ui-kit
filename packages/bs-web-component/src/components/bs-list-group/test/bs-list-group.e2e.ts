import { newE2EPage } from '@stencil/core/testing';

describe('bs-list-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-list-group></bs-list-group>');

    const element = await page.find('bs-list-group');
    expect(element).toHaveClass('hydrated');
  });
});
