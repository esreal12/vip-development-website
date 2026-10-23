import type { Metadata } from 'next'
import TemporaryVillasLanding from '@/components/TemporaryVillasLanding'

export const metadata: Metadata = {
  title: 'VIP Development | Villas Tres Hermanas',
  description: 'Contact VIP Development for Villas Tres Hermanas information.',
  robots: { index: false, follow: false },
}

export default function Home() {
  return (
    <TemporaryVillasLanding />
  )
}
