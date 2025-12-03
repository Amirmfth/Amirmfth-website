import {render, screen} from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import Hero from '../components/Hero';
import messages from '../messages/en.json';

describe('Hero', () => {
  it('shows localized hero content and download link', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Hero locale="en" />
      </NextIntlClientProvider>
    );

    expect(screen.getByText(messages.hero.greeting)).toBeInTheDocument();
    expect(screen.getByText(messages.hero.title)).toBeInTheDocument();
    const downloadLink = screen.getByRole('link', {name: messages.cta.download});
    expect(downloadLink).toHaveAttribute('href', '/api/cv?locale=en');
  });
});
