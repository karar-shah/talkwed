'use client'

import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { BsEmojiSmile } from 'react-icons/bs'
import { CiAt } from 'react-icons/ci'
import { FaMicrophone } from 'react-icons/fa'
import { PiTextAa } from 'react-icons/pi'
import { RiAttachment2 } from 'react-icons/ri'

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="flex items-center space-x-4 border-b border-gray-200 p-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'text-blue-500' : 'text-gray-600'}
      >
        <RiAttachment2 size={20} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'text-blue-500' : 'text-gray-600'}
      >
        <BsEmojiSmile size={20} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'text-blue-500' : 'text-gray-600'}
      >
        <FaMicrophone size={20} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'text-blue-500' : 'text-gray-600'}
      >
        <CiAt size={20} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-500' : 'text-gray-600'}
      >
        <PiTextAa size={20} color='#848383' />
      </button>
    </div>
  )
}

const MessagesEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Share unique, descriptive information about your business in order to convert couples and improve your ranking across top search engines.',
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none min-h-[150px] p-4',
      },
    },
  })

  return (
    <div className="border border-gray-300 rounded-md">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default MessagesEditor