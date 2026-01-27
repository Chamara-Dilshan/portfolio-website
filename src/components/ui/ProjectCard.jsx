import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project, onClick }) => {
  const { title, description, image, tech, githubUrl, liveUrl } = project

  const handleLinkClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      onClick={onClick}
      className="card overflow-hidden group cursor-pointer relative"
    >
      {/* Accent Border on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-accent-400 to-primary-500 -z-10" />
      </div>

      {/* Project Image */}
      <div className="relative h-56 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-400/10 to-primary-500/10" />
            <div className="relative text-6xl">🚀</div>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/80 via-secondary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-5">
          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="p-3 bg-accent-500 text-white rounded-xl hover:bg-accent-600 transition-all hover:scale-110 shadow-lg"
                aria-label="View Live Demo"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="p-3 bg-white text-secondary-500 rounded-xl hover:bg-neutral-50 transition-all hover:scale-110 shadow-lg"
                aria-label="View on GitHub"
              >
                <FaGithub size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-secondary-500 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 4).map((item, index) => (
            <span
              key={item}
              className="px-3 py-1 bg-gradient-to-r from-accent-50 to-primary-50 text-primary-600 text-xs font-semibold rounded-lg border border-accent-200/50"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {item}
            </span>
          ))}
          {tech.length > 4 && (
            <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-semibold rounded-lg">
              +{tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Accent corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent-400/20 to-transparent rounded-bl-3xl" />
      </div>
    </div>
  )
}

export default ProjectCard
