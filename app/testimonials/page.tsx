import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Reviews & Testimonials | Manoharan Dental Care Salem',
  description: 'Read reviews from our happy patients at Manoharan Dental Care in Salem. See why we are trusted for safe, effective dental treatments.',
};

export default function TestimonialsPage() {
  return (
    <main>
      <h1>Patient Reviews & Testimonials</h1>
      <p>Patient testimonials go here...</p>
    </main>
  );
}
