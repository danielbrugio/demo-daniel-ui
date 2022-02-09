import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { pojoaque } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button } from 'react-daniel-ui'
import { Header } from '../Header'
import { Table } from '../Table'
import { ButtonSnippets } from '../common/snippets'

export const ButtonDemo = () => {
  const [tag, setTag] = useState('useCases')

  const changeTag = (e) => setTag(e)

  const dataTable = [
    {
      title: 'variant',
      type: '"primary", "secondary"',
      default: 'primary',
      description: 'Choose a variant'
    },
    {
      title: 'size',
      type: '"small", "medium", "large"',
      default: 'medium',
      description: `Choose the size`
    },
    {
      title: 'onClick',
      type: 'func',
      default: 'noop',
      description: `funcion to call when button press`
    },
    {
      title: 'disable',
      type: 'bool',
      default: 'false',
      description: `Set disable to true if interaction with button isn't available to user`
    }
  ]

  return (
    <div>
      <Header title='Button' changeTag={changeTag} />
      {tag === 'general' && (
        <Table
          title='Button'
          description='Represent a clickable button element that triggers an event'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <Button>Primary</Button>
          <Button style={{ margin: '0 10px' }} variant='secondary'>
            secondary
          </Button>
          <SyntaxHighlighter language='jsx' style={pojoaque}>
            {ButtonSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <Button style={{ margin: '0 10px' }} size='small'>
            Small
          </Button>
          <Button style={{ margin: '0 10px' }} size='medium'>
            medium
          </Button>
          <Button style={{ margin: '0 10px' }} size='large'>
            large
          </Button>
          <SyntaxHighlighter language='jsx' style={pojoaque}>
            {ButtonSnippets.sizes}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}