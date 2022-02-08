import React from "react";
import { Header } from "../Header";

import SyntaxHighlighter from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const GettingStarted = () => {
  return (
    <div>
      <Header title="Getting Started" hideTags />
      <div className="usecases">
        <h1> How to install </h1>
        <p>For npm users</p>
        <SyntaxHighlighter language="jsx" style={pojoaque}>
          {`$ npm install react-daniel-ui styled-components`}
        </SyntaxHighlighter>
        <p>For yarn users</p>
        <SyntaxHighlighter language="jsx" style={pojoaque}>
          {`$ yarn add react-daniel-ui styled-components`}
        </SyntaxHighlighter>
        <h1> Example </h1>
        <SyntaxHighlighter language="jsx" style={pojoaque}>
          {`
  import React from 'react'
  import { Button } from 'react-neon-ui'
  const App = () => (
    <div>
      <Button>Click Here</Button>
    </div>
  )
  export default App
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
