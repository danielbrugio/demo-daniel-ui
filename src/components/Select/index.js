import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { pojoaque } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Select } from 'react-daniel-ui'
import { Header } from '../Header'
import { Table } from '../Table'
import { SelectSnippets } from '../common/snippets'

export const SelectDemo = () => {
  const [tag, setTag] = useState('useCases')

  const changeTag = (e) => setTag(e)

  const dataTable = [
    {
      name: 'variant',
      type: '"primary", "secondary"',
      default: 'primary',
      description: 'Choose a variant'
    },
    {
      name: 'size',
      type: '"small", "medium", "large"',
      default: 'medium',
      description: `choose a size`
    },
    {
      name: 'onChange',
      type: 'func',
      default: 'noop',
      description: `funcion to call when select an option`
    },
    {
      name: 'label',
      type: 'string',
      default: '""',
      description: `Add a label text to the select`
    },
    {
      name: 'options',
      type: 'array',
      default: '[]',
      description: `Array with the options`
    },
    {
      name: 'multiple',
      type: 'bool',
      default: 'false',
      description: `True to allow multiple selection`
    }
  ]

  return (
    <div>
      <Header title='Select' changeTag={changeTag} />
      {tag === 'props' && (
        <Table
          title='Select'
          description='Select with multiple choice'
          data={dataTable}
        />
      )}
      {tag === 'useCases' && (
        <div className='usecases'>
          <h1>Variants</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Select label='Select variant' options={['primary', 'secondary']} />

            <Select
              variant='secondary'
              label='Select variant'
              options={['primary', 'secondary']}
            />
          </div>
          <SyntaxHighlighter language='jsx' style={pojoaque}>
            {SelectSnippets.variants}
          </SyntaxHighlighter>
          <h1>Sizes</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Select
              size='small'
              label='small'
              options={['small', 'medium', 'large']}
            />
            <Select
              size='medium'
              label='medium'
              options={['small', 'medium', 'large']}
            />
            <Select
              size='large'
              label='large'
              options={['small', 'medium', 'large']}
            />
          </div>
          <SyntaxHighlighter language='jsx' style={pojoaque}>
            {SelectSnippets.sizes}
          </SyntaxHighlighter>
          <h1>MultiSelect</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Select
              label='Multi Select'
              options={['primary', 'secondary']}
              multiple
            />
            <Select label='Single Select' options={['primary', 'secondary']} />
          </div>
          <SyntaxHighlighter language='jsx' style={pojoaque}>
            {SelectSnippets.multiselect}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}