import ResourceCard from './ResourceCard.jsx'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const resources = [
  {
    id: 'docs',
    icon: 'documentation-icon',
    title: 'Documentation',
    description: 'Your questions, answered',
    links: [
      { href: 'https://vite.dev/', label: 'Explore Vite', image: viteLogo, imageClass: 'logo' },
      { href: 'https://react.dev/', label: 'Learn more', image: reactLogo, imageClass: 'button-icon' },
    ],
  },
  {
    id: 'social',
    icon: 'social-icon',
    title: 'Connect with us',
    description: 'Join the Vite community',
    links: [
      { href: 'https://github.com/vitejs/vite', label: 'GitHub', icon: 'github-icon' },
      { href: 'https://chat.vite.dev/', label: 'Discord', icon: 'discord-icon' },
      { href: 'https://x.com/vite_js', label: 'X.com', icon: 'x-icon' },
      { href: 'https://bsky.app/profile/vite.dev', label: 'Bluesky', icon: 'bluesky-icon' },
    ],
  },
]

function NextStepsSection() {
  return (
    <section id="next-steps">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} {...resource} />
      ))}
    </section>
  )
}

export default NextStepsSection
