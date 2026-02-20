function ProjectList({ projects }) {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <img
            src={project.img}
            alt={project.category}
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectList