import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SkillBadge from '../ui/SkillBadge'
import { skills } from '../../data/skills'

// Define column categories
const leftColumnCategories = ['Programming Languages', 'Frontend Development', 'Backend Development']
const rightColumnCategories = ['Databases', 'Version Control', 'Cloud & DevOps']
const fullWidthCategories = ['Design & Tools']

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  // Split skills into columns
  const leftSkills = Object.entries(skills).filter(([category]) =>
    leftColumnCategories.includes(category)
  )
  const rightSkills = Object.entries(skills).filter(([category]) =>
    rightColumnCategories.includes(category)
  )
  const fullWidthSkills = Object.entries(skills).filter(([category]) =>
    fullWidthCategories.includes(category)
  )

  const renderCategory = ([category, skillList], isLast = false) => (
    <div key={category} className={isLast ? '' : 'mb-8'}>
      <h3 className="text-lg font-semibold text-dark-700 mb-4">{category}</h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-wrap gap-3"
      >
        {skillList.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <SkillBadge skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )

  return (
    <section id="skills" className="section-padding bg-dark-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-center mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>

          <p className="text-dark-500 text-center mb-12 max-w-2xl mx-auto">
            I work with a variety of technologies to bring ideas to life. Here are
            the tools and technologies I use most frequently.
          </p>

          {/* Two column layout on desktop */}
          <div className="grid md:grid-cols-2 gap-x-8">
            {/* Left Column */}
            <div>
              {leftSkills.map((skill, index) =>
                renderCategory(skill, index === leftSkills.length - 1)
              )}
            </div>

            {/* Right Column */}
            <div>
              {rightSkills.map((skill, index) =>
                renderCategory(skill, index === rightSkills.length - 1)
              )}
            </div>
          </div>

          {/* Full width section - Design & Tools (always at bottom) */}
          <div className="mt-8">
            {fullWidthSkills.map((skill) => renderCategory(skill, true))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
