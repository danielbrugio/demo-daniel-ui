import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { pojoaque } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Autocomplete } from 'react-daniel-ui'
import { Header } from '../Header'
import { Table } from '../Table'
import { top100Films } from '../common/mockdata'
import { AutocompleteSnippets } from '../common/snippets'

export const AutocompleteDemo = () => {
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
      title: 'onChange',
      type: 'func',
      default: 'noop',
      description: `funcion to call when select an option`
    },
    {
      title: 'placeholder',
      type: 'string',
      default: '""',
      description: `Add a placeholder text`
    },
    {
      title: 'suggestions',
      type: 'array',
      default: '[]',
      description: `Array with the suggestions for autocomplete`
    }
  ]

  return (
    <div>
      <Header title='Autocomplete' changeTag={changeTag} />
      {tag === 'general' && (
        <Table
          title='Autocomplete'
          description='Input with suggestions'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Autocomplete suggestions={top100Films} placeholder='Top Movies' />
            <Autocomplete
              variant='secondary'
              suggestions={top100Films}
              placeholder='Top Movies'
            />
          </div>
          <SyntaxHighlighter language='jsx' style={pojoaque}>
            {AutocompleteSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap'
            }}
          >
            <Autocomplete
              size='small'
              suggestions={top100Films}
              placeholder='Top Movies'
            />
            <Autocomplete
              size='medium'
              suggestions={top100Films}
              placeholder='Top Movies'
            />
            <Autocomplete
              size='large'
              suggestions={top100Films}
              placeholder='Top Movies'
            />
          </div>
          <SyntaxHighlighter language='jsx' style={pojoaque}>
            {AutocompleteSnippets.sizes}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}