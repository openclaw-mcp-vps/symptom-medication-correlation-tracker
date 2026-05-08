import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Symptom & Medication Correlation Tracker',
  description: 'Track how medications affect your symptoms. Correlate symptom severity with medication timing and dosage changes over time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="167730ac-eea2-4330-9755-4ff538a64065"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}