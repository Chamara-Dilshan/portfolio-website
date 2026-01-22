import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

const BlogCard = ({ post }) => {
  const { slug, title, date, excerpt, tags, readingTime } = post

  return (
    <Link to={`/blog/${slug}`} className="card overflow-hidden group block">
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-dark-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-dark-500 text-sm mb-4 line-clamp-3">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-dark-400">
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={12} />
            <span>{date}</span>
          </div>
          {readingTime && (
            <div className="flex items-center gap-1">
              <FaClock size={12} />
              <span>{readingTime} min read</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
