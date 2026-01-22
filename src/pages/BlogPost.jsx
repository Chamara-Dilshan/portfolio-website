import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaArrowLeft, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { blogPosts } from '../data/blogPosts'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="heading-2 mb-4">Post Not Found</h1>
          <p className="text-dark-500 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <article className="container-custom max-w-3xl">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-dark-500 hover:text-primary-600 transition-colors mb-8"
        >
          <FaArrowLeft size={14} />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="heading-1 mb-4">{post.title}</h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-dark-500">
            <div className="flex items-center gap-2">
              <FaCalendarAlt size={14} />
              <span>{post.date}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-2">
                <FaClock size={14} />
                <span>{post.readingTime} min read</span>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-dark-700 max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="bg-dark-100 px-1.5 py-0.5 rounded text-primary-600"
                    {...props}
                  >
                    {children}
                  </code>
                )
              },
              a({ children, ...props }) {
                return (
                  <a
                    className="text-primary-600 hover:text-primary-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  >
                    {children}
                  </a>
                )
              },
              img({ alt, ...props }) {
                return (
                  <img
                    className="rounded-lg shadow-md"
                    alt={alt}
                    {...props}
                  />
                )
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-dark-100">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <FaArrowLeft size={14} />
            Read more articles
          </Link>
        </footer>
      </article>
    </motion.div>
  )
}

export default BlogPost
