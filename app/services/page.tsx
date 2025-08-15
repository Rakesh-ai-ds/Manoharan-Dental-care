import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Services in Salem | Manoharan Dental Care',
  description: 'From root canals to dental implants, we offer expert dental services in Salem. Book your appointment for high-quality dental care.',
};

export default function ServicesPage() {
  return (
    <main>
      <h1>Our Dental Services</h1>
      <p>Details about services go here...</p>
    </main>
  );
}
