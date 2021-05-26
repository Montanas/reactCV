import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 2, value: "Css", xp: 1.7 },
      { id: 3, value: "Php", xp: 2 },
      { id: 4, value: "Java", xp: 1.4 },
      { id: 5, value: "SQL", xp: 1.6 },
    ],

    frameworks: [
      { id: 1, value: "Symfony", xp: 2 },
      { id: 2, value: "React", xp: 1 },
      { id: 3, value: "Bootstrap", xp: 2 },
      { id: 4, value: "Sass", xp: 1.1 },
      { id: 5, value: "Material UI", xp: 0.5 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks & Bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
