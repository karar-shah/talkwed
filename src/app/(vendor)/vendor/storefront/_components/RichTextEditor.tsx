'use client'

import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FaAlignCenter, FaAlignLeft, FaAlignRight, FaBold, FaItalic, FaListUl, FaUnderline } from 'react-icons/fa'

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
        <FaBold size={14} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'text-blue-500' : 'text-gray-600'}
      >
        <FaItalic size={14} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'text-blue-500' : 'text-gray-600'}
      >
        <FaUnderline size={14} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'text-blue-500' : 'text-gray-600'}
      >
        <FaListUl size={14} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-500' : 'text-gray-600'}
      >
        <FaAlignLeft size={14} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'text-blue-500' : 'text-gray-600'}
      >
        <FaAlignCenter size={14} color='#848383' />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-500' : 'text-gray-600'}
      >
        <FaAlignRight size={14} color='#848383' />
      </button>
    </div>
  )
}

const RichTextEditor = () => {
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

export default RichTextEditor