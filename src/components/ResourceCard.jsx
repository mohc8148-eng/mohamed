function ResourceIcon({ name, className = 'button-icon' }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}

function ResourceCard({ id, icon, title, description, links }) {
  return (
    <div id={id}>
      <ResourceIcon name={icon} className="icon" />
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.image ? <img className={link.imageClass} src={link.image} alt="" /> : <ResourceIcon name={link.icon} />}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResourceCard
