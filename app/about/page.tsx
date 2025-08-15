import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Manoharan Dental Care Salem',
  description: 'Learn more about Manoharan Dental Care in Salem. Meet Dr. Balaji Prasath and our experienced dental team dedicated to your oral health.',
};

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <p>Information about the clinic and team goes here...</p>
    </main>
  );
}
