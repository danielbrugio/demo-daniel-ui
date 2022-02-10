import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { TextInputSnippets } from "../common/snippets";
import { Header } from "../Header";
import { Table } from "../Table";
import { TextInput } from "react-daniel-ui";

export const TextInputDemo = () => {
  const [tag, setTag] = useState("useCases");

  const changeTag = (e) => setTag(e);

  const dataTable = [
    {
      name: "variant",
      type: '"primary","secondary"',
      default: "primary",
      description: "Choose a variant"
    },
    {
      name: "size",
      type: '"small","medium","large"',
      default: "medium",
      description: `Choose a size`
    },
    {
      name: "onChange",
      type: "func",
      default: "noop",
      description: `funcion to call when input changes`
    },
    {
      name: "placeholder",
      type: "string",
      default: '""',
      description: `Add a text placeholder to the textInput`
    }
  ];

  return (
    <div>
      <Header title="Text Input" changeTag={changeTag} />
      {tag === "props" && (
        <Table
          title="Text Input"
          description="It is used to create interactive controls for web-based forms to receive user data."
          data={dataTable}
        />
      )}
      {tag === "useCases" && (
        <div className="usecases">
          <h1>Variants</h1>
          <TextInput placeholder="Primary" />
          <TextInput
            style={{ margin: "10px" }}
            variant="secondary"
            placeholder="Secondary"
          />
          <SyntaxHighlighter language="jsx" style={pojoaque}>
            {TextInputSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <TextInput
            style={{ margin: "10px" }}
            size="small"
            placeholder="Small"
          />
          <TextInput
            style={{ margin: "10px" }}
            size="medium"
            placeholder="Medium"
          />
          <TextInput
            style={{ margin: "10px" }}
            size="large"
            placeholder="Large"
          />
          <SyntaxHighlighter language="jsx" style={pojoaque}>
            {TextInputSnippets.sizes}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
