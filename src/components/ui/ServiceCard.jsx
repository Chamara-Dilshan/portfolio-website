import {
  FaCode,
  FaLightbulb,
  FaProjectDiagram,
  FaBriefcase,
} from 'react-icons/fa'

const iconMap = {
  code: FaCode,
  lightbulb: FaLightbulb,
  project: FaProjectDiagram,
  briefcase: FaBriefcase,
}

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || FaCode

  return (
    <div className="card overflow-hidden group relative h-full flex flex-col">
      {/* Gradient hover border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-accent-400 to-primary-500 -z-10" />
      </div>

      <div className="p-6 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-primary-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-accent-500/30 group-hover:scale-110 transition-all duration-300">
            <Icon size={28} />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl text-secondary-500 mb-3 text-center group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm mb-4 leading-relaxed text-center flex-grow">
          {service.description}
        </p>

        {/* Features */}
        {service.features && (
          <ul className="space-y-2 mt-auto">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs text-neutral-600"
              >
                <span className="text-accent-500 mt-0.5 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
