import React, { useState } from "react";
import { NumberInput } from "react-daniel-ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Header } from "../Header";
import { Table } from "../Table";
import { NumberInputSnippets } from "../common/snippets";

export const NumberInputDemo = () => {
  const [tag, setTag] = useState("useCases");

  const changeTag = (e) => setTag(e);

  const dataTable = [
    {
      name: "variant",
      type: '"primary", "secondary"',
      default: "primary",
      description: "Choose a variant"
    },
    {
      name: "size",
      type: '"small", "medium", "large"',
      default: "medium",
      description: `choose a size`
    },
    {
      name: "onChange",
      type: "func",
      default: "noop",
      description: `funcion to call when input change`
    },
    {
      name: "placeholder",
      type: "string",
      default: '""',
      description: `Add a text placeholder to the NumberInput`
    },
    {
      name: "formatted",
      type: '"number", "currency"',
      default: "false",
      description: `Choose the format for the numbers`
    }
  ];

  return (
    <div>
      <Header title="Number Input" changeTag={changeTag} />
      {tag === "props" && (
        <Table
          title="Number Input"
          description="Input that only receives numbers and can format thems"
          data={dataTable}
        />
      )}
      {tag === "useCases" && (
        <div className="usecases">
          <h1>Variants</h1>
          <NumberInput placeholder="Primary" />
          <NumberInput
            style={{ margin: "10px" }}
            variant="secondary"
            placeholder="Secondary"
          />
          <SyntaxHighlighter language="jsx" style={pojoaque}>
            {NumberInputSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <NumberInput
            style={{ margin: "10px" }}
            size="small"
            placeholder="Small"
          />
          <NumberInput
            style={{ margin: "10px" }}
            size="medium"
            placeholder="Medium"
          />
          <NumberInput
            style={{ margin: "10px" }}
            size="large"
            placeholder="Large"
          />
          <SyntaxHighlighter language="jsx" style={pojoaque}>
            {NumberInputSnippets.sizes}
          </SyntaxHighlighter>
          <h1>formatted</h1>
          <NumberInput style={{ margin: "10px" }} value="1000000" />
          <NumberInput
            style={{ margin: "10px" }}
            value="1,000,000"
            formatted="number"
          />
          <NumberInput
            style={{ margin: "10px" }}
            value="$1,000,000"
            formatted="currency"
          />
          <SyntaxHighlighter language="jsx" style={pojoaque}>
            {NumberInputSnippets.formatted}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
