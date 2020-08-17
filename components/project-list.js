import React from "react";

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-list">
        <div className="project-header">Projects</div>
        {this.props.projects.map(project => {
          return (
            <div key={project.name} className="project-row">
              <a href={project.url} target="_blank">
                {project.name}{" "}
              </a>
            </div>
          );
        })}

        <style jsx>{`
          .project-list {
          }
          .project-header {
            font-size: 20px;
          }
          .project-row {
          }
        `}</style>
      </div>
    );
  }
}
export default ProjectList;
