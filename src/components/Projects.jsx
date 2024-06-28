import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ml-9">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <img src={project.image} width={300} height={300} alt="" className="mb-6 rounded"/>
            </div>
            <div className="w-full mx-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            <a href={project.link}>click this link for the actual website</a>
            <br />  
            {project.technologies.map((tech, index) => (
              <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
            ))}
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects