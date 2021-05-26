import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };

  handleIfnfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleIfnfo}></img>
        <span className="infos" onClick={this.handleIfnfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopenner noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Visiter
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>

              <div className="button return" onClick={this.handleIfnfo}>
                retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
