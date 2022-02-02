import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Select } from 'react-daniel-ui'
import { Header } from '../Header'
import { Table } from '../Table'
import { SelectSnippets } from '../common/snippets'

export const SelectDemo = () => {
  const [tag, setTag] = useState('useCases')

  const changeTag = (e) => setTag(e)

  const dataTable = [
    {
      title: 'variant',
      type: '"primary", "secondary"',
      default: 'primary',
      Description: 'Choose a variant'
    },
    {
      title: 'size',
      type: '"small", "medium", "large"',
      default: 'medium',
      Description: `choose a size`
    },
    {
      title: 'onChange',
      type: 'func',
      default: 'noop',
      Description: `funcion to call when select an option`
    },
    {
      title: 'label',
      type: 'string',
      default: '""',
      Description: `Add a label text to the select`
    },
    {
      title: 'options',
      type: 'array',
      default: '[]',
      Description: `Array with the options`
    },
    {
      title: 'multiple',
      type: 'bool',
      default: 'false',
      Description: `True to allow multiple selection`
    }
  ]

  return (
    <div>
      <Header title='Select' changeTag={changeTag} />
      {tag === 'general' && (
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
          <SyntaxHighlighter language='jsx' style={monokai}>
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
          <SyntaxHighlighter language='jsx' style={monokai}>
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
          <SyntaxHighlighter language='jsx' style={monokai}>
            {SelectSnippets.multiselect}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}