import React from 'react'
import { Autocomplete, Button, Select, TextInput, NumberInput } from 'react-daniel-ui';

const App = () => (
  <div>
    <Button>Click Here</Button>
    <Select/>
    <NumberInput/>
    <Autocomplete variant='secondary' placeholder='Autocomplete'/>
    <TextInput variant='secondary' placeholder='Text Input'/>
  </div>
)

export default App
