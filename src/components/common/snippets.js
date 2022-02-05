export const ButtonSnippets = {
  variants: `
    import { Button } from 'react-daniel-ui';

    <Button variant='primary'>Primary</Button>
    <Button variant='secondary'>Secondary</Button>
    `,
  sizes: `
    import { Button } from 'react-daniel-ui';

    <Button size='small'>Small</Button>
    <Button size='medium'>Medium</Button>
    <Button size='large'>Large</Button>
    `
};

export const NumberInputSnippets = {
  variants: `
    import { NumberInput } from 'react-daniel-ui';

    <TextInput variant='primary' placeholder='Primary' />
    <TextInput variant='secondary' placeholder='Secondary' />
    `,
  sizes: `
    import { NumberInput } from 'react-daniel-ui';

    <TextInput size='small' placeholder="Small" />
    <TextInput size='medium' placeholder="Medium" />
    <TextInput size='large' placeholder="Large" />
    `,
  formatted: `
    import { NumberInput } from 'react-daniel-ui';

    <TextInput />
    <TextInput formatted='number' />
    <TextInput formatted='currency' />
    `
};

export const TextInputSnippets = {
  variants: `
    import { TextInput } from 'react-daniel-ui';

    <TextInput variant='primary' placeholder='Primary'/>
    <TextInput variant='secondary' placeholder='Secondary'/>
    `,
  sizes: `
    import { TextInput } from 'react-daniel-ui';

    <TextInput size='small' placeholder="Small"/>
    <TextInput size='medium' placeholder="Medium"/>
    <TextInput size='large' placeholder="Large"/>
    `
};

export const SelectSnippets = {
  variants: `
    import { Select } from 'react-daniel-ui';

    <Select
      variant='primary'
      label='Select variant'
      options={['primary', 'secondary']}
    />
    <Select
      variant='secondary'
      label='Select variant'
      options={['primary', 'secondary']}
    />
    `,
  sizes: `
    import { Select } from 'react-daniel-ui';

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
    `,
  multiselect: `
    import { Select } from 'react-daniel-ui';
    
    <Select
      label='Multi Select'
      options={['primary', 'secondary']}
    multiple
    />
    <Select
      label='Single Select'
      options={['primary', 'secondary']}
    />
    `
};

export const AutocompleteSnippets = {
  variants: `
    import { Select } from "react-daniel-ui";
    const colors = ['blue','red','yellow','green','black','white]
    <Autocomplete variant='primary' suggestions={colors} />
    <Autocomplete variant='secondary' suggestions={colors} />
    `,
  sizes: `
    import { Select } from 'react-daniel-ui'
    const colors = ['blue','red','yellow','green','black','white]
    <Autocomplete size='small' suggestions={colors} />
    <Autocomplete size='medium' suggestions={colors} />
    <Autocomplete size='large' suggestions={colors} />
    `
};

export const ThemeSnippets = {
  changeTheme: `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { ThemeProvider } from 'styled-components';
    import { mountain } from 'react-daniel-ui';
    import { sea } from 'react-daniel-ui';
    ReactDOM.render(
        <ThemeProvider theme={mountain}>
          ...your app content
        </ThemeProvider>,
      document.getElementById('root'),
    );
    `,
  themeTemplate: `
    export const customTheme = {
      textcolor: {
        primary: {
          on: '#22c1c3',
          off: '#fdbb2d'
        },
        secondary: {
          on: '#373B44',
          off: '#4286f4'
        }
      },
      bordercolor: {
        primary: {
          on: '#fdbb2d',
          off: '#22c1c3'
        },
        secondary: {
          on: '#4286f4',
          off: '#373B44'
        }
      },
      fontFamily: {
        name: 'lobster'
      }
    }
    `,
  customTheme: `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { ThemeProvider } from 'styled-components';
    import { customTheme } from '../customTheme';
    ReactDOM.render(
        <ThemeProvider theme={customTheme}>
          ...your app content
        </ThemeProvider>,
      document.getElementById('root'),
    );
    `
};
