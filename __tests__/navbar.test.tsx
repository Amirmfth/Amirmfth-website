import {render, screen} from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import Navbar from '../components/Navbar';
import messages from '../messages/en.json';

jest.mock('next/navigation', () => ({
  usePathname: () => '/en',
  useLocale: () => 'en'
}));

describe('Navbar', () => {
  it('renders localized navigation links', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Navbar locale="en" />
      </NextIntlClientProvider>
    );

    expect(screen.getByText(messages.nav.home)).toBeInTheDocument();
    expect(screen.getByText(messages.nav.about)).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'FA'})).toHaveAttribute('href', '/fa');
  });
});
