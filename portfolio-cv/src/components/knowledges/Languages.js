import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      {id: 1, value: "html", xp:1},
      {id: 2, value: "Css", xp:1},
      {id: 3, value: "javaScript", xp:0.8},
      //{id: 4, value: "Php", xp:0}
    ],
    frameworks: [
      {id: 1, value: "express", xp:0.6},
      {id: 2, value: "react", xp:0.4},
      {id: 3, value: "sass", xp:0.8},
      {id: 4, value: "talwind", xp:0.4}
    ]
  }
  render() {
    let {languages, frameworks} = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title="languages"
        
        />
        <ProgressBar 
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"

        
        />
        
      </div>
    );
  }
}

export default Languages;