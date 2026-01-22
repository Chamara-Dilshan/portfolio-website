import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ project, onClick }) => {
  const { title, description, image, tech, githubUrl } = project

  const handleGithubClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      onClick={onClick}
      className="card overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
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
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg text-dark-800">{title}</h3>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGithubClick}
              className="p-2 text-dark-500 hover:text-dark-800 hover:bg-dark-100 rounded-lg transition-colors flex-shrink-0"
              aria-label="View on GitHub"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>

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
