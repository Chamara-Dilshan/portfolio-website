import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiNextdotjs,
  SiSpringboot,
  SiMysql,
  SiAmazonwebservices,
  SiKubernetes,
  SiAdobephotoshop,
  SiBlender,
  SiWordpress,
  SiSketchup,
  SiAdobeillustrator,
} from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'
import { TbLetterC } from 'react-icons/tb'

const iconMap = {
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  figma: SiFigma,
  nextjs: SiNextdotjs,
  java: FaJava,
  c: TbLetterC,
  springboot: SiSpringboot,
  aws: SiAmazonwebservices,
  kubernetes: SiKubernetes,
  photoshop: SiAdobephotoshop,
  blender: SiBlender,
  wordpress: SiWordpress,
  sketchup: SiSketchup,
  illustrator: SiAdobeillustrator,
  proteus: FaCode,
}

const colorMap = {
  react: 'text-[#61DAFB]',
  javascript: 'text-[#F7DF1E]',
  typescript: 'text-[#3178C6]',
  html: 'text-[#E34F26]',
  css: 'text-[#1572B6]',
  node: 'text-[#339933]',
  express: 'text-dark-700',
  mongodb: 'text-[#47A248]',
  postgresql: 'text-[#4169E1]',
  mysql: 'text-[#4479A1]',
  git: 'text-[#F05032]',
  github: 'text-dark-700',
  docker: 'text-[#2496ED]',
  figma: 'text-[#F24E1E]',
  nextjs: 'text-dark-900',
  java: 'text-[#ED8B00]',
  c: 'text-[#A8B9CC]',
  springboot: 'text-[#6DB33F]',
  aws: 'text-[#FF9900]',
  kubernetes: 'text-[#326CE5]',
  photoshop: 'text-[#31A8FF]',
  blender: 'text-[#F5792A]',
  wordpress: 'text-[#21759B]',
  sketchup: 'text-[#005F9E]',
  illustrator: 'text-[#FF9A00]',
  proteus: 'text-[#1C79B3]',
}

const SkillBadge = ({ skill }) => {
  const Icon = iconMap[skill.icon] || FaCode
  const colorClass = colorMap[skill.icon] || 'text-dark-600'

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-dark-100 hover:shadow-md hover:border-primary-200 transition-all">
      <Icon className={`${colorClass}`} size={18} />
      <span className="text-dark-700 font-medium">{skill.name}</span>
    </div>
  )
}

export default SkillBadge
