import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      {id: 1, value: "html", xp:0.6},
      {id: 2, value: "Css", xp:0.6},
      {id: 3, value: "javaScript", xp:0.4}
    ],
    frameworks: [
      {id: 1, value: "express", xp:0.2},
      {id: 2, value: "react", xp:0.2},
      {id: 3, value: "sass", xp:0.5}
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