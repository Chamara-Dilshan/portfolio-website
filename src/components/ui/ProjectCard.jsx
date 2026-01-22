import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  const { title, description, image, tech, liveUrl, githubUrl } = project

  return (
    <div className="card overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 bg-dark-100 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-primary-100 to-primary-200">
            🚀
          </div>
        )}

        {/* Overlay with links */}
        <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-dark-800 hover:text-primary-600 transition-colors"
              aria-label="View on GitHub"
            >
              <FaGithub size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-dark-800 hover:text-primary-600 transition-colors"
              aria-label="View live site"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-dark-800">{title}</h3>

        <p className="text-dark-500 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 bg-dark-50 text-dark-600 text-xs rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
