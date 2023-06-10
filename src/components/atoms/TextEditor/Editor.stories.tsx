import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import React from 'react'
import Editor, { EditorProps } from '@components/atoms/TextEditor/Editor'
import { useTheme } from '@mui/material'

export default {
  title: 'Components/Atoms/TextEditor',
  component: Editor,
  argTypes: {},
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<EditorProps> = (args) => {
  const theme = useTheme()
  return (
    <div
      style={{
        background: theme.palette.mode === 'light' ? '#FFF' : '#333333',
        padding: '32px 0 32px 0',
        display: 'flex',
        justifyContent: 'center',
        height: '70vh',
      }}
    >
      <Editor {...args} />
    </div>
  )
}

// Reuse that template for creating different stories
export const Normal = Template.bind({})
Normal.args = { id: 'example', error: false, simple: false, placeholder: '' }
