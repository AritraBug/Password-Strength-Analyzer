import Head from 'next/head';
import PasswordStrength from '../components/PasswordStrength';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <Head>
        <title>Password Strength Analyzer</title>
        <meta name="description" content="Check the strength of your password and get suggestions for improvement" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-md">
        <PasswordStrength />
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Password Strength Analyzer - Built with Next.js and zxcvbn</p>
        <p className="mt-1">Note: Your passwords are never stored or transmitted</p>
      </footer>
    </div>
  );
}