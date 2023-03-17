import { newE2EPage } from '@stencil/core/testing';

describe('bs-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-select></bs-select>');

    const element = await page.find('bs-select');
    expect(element).toHaveClass('hydrated');
  });
});
