import React from 'react'
import { NoteAppBar } from './NoteAppBar'
import { NoteContent } from './NoteContent'

export const NoteScreen = () => {
  return (
    <div className="note__main-content">
      <NoteAppBar />
      <NoteContent />
    </div>
  )
}
