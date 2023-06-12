import React from 'react'
import './highlight'
import { StyledEditor } from './styles'
import EditorToolbar, { formats } from './EditorToolbar'
import ReactQuill, { ReactQuillProps } from 'react-quill'
import { SxProps } from '@mui/material'
import { Theme } from '@mui/material/styles'
// editor
import 'react-quill/dist/quill.snow.css'

export type EditorProps = ReactQuillProps & {
  id?: string
  error?: boolean
  simple?: boolean
  helperText?: React.ReactNode
  placeholder?: string
  sx?: SxProps<Theme>
}

export default function Editor({
  id = 'minimal-quill',
  error,
  value,
  onChange,
  simple = false,
  helperText,
  placeholder,
  sx,
  ...other
}: EditorProps) {
  const modules = {
    toolbar: {
      container: `#${id}`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  }

  return (
    <>
      <StyledEditor
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
          }),
          ...sx,
        }}
      >
        <EditorToolbar id={id} isSimple={simple} />

        <ReactQuill
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder || 'Write something awesome...'}
          {...other}
        />
      </StyledEditor>

      {helperText && helperText}
    </>
  )
}
