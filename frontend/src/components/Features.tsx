import { FeatureSteps } from "./ui/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'One-Stop solution',
    content: 'We provide end-to-end services & designs to develop and support with maximum efficiency', 
    image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Quality Assurance',
    content: 'Our rigorous quality assurance processes ensure every deliverable meets the highest industry standards.',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Bespoke Process',
    content: 'Our processes are custom-built to align with your business objectives & industry standards',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 4',
    title: 'Time Line',
    content: 'We value your time as much as ours, and we ensure that projects stay on track.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 5',
    title: 'Accountability',
    content: 'We take full accountability for the quality, performance, and outcomes of every project.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}