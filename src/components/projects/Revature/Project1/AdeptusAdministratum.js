import React from "react";
import ReactMarkdown from "react-markdown";
import readmeText from "./README.md";

class AdeptusAdministratum extends React.Component {
  state = {
    readme: "",
  };

  componentDidMount() {
    fetch(readmeText)
      .then((resp) => resp.text())
      .then((text) => {
        this.setState({ readme: text });
      });
  }

  render() {
    return (
      <div className="project-div">
        <h2>
          The front-end user interface for the Adeptus Administratum API
          developed by Karl Matthes
        </h2>
        <h4>November 2020</h4>

        <ReactMarkdown escapeHtml={false} source={this.state.readme} />
      </div>
    );
  }
}

export default AdeptusAdministratum;
