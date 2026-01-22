import { motion } from 'framer-motion'
import BlogCard from '../components/ui/BlogCard'
import { blogPosts } from '../data/blogPosts'

const BlogList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-2 mb-4">
            My <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-dark-500 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, programming,
            and technology.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-dark-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default BlogList
