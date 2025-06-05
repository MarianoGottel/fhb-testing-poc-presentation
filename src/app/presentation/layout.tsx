import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Aurora Engineering All Hands - June 5, 2025',
  description: 'From Engineers to Builders: Embracing the Age of AI',
}

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="presentation-layout">
      {children}
    </div>
  )
}