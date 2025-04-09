import { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

function App() {
  const editorRef = useRef(null);
  const [content, setContent] = useState("<p>Welcome to Writely.</p>")

  const handleContentAddition = () => {
    if (editorRef.current) {
      // Insert content at current cursor position
      // editorRef.current.insertContent('<p>New content added!</p>');
      
      // Alternatively, if you want to update your state as well
      setContent(editorRef.current.getContent());
    }
  }

  return (
    <>
      <Editor
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue={content}
      init={{
        height:500,
        menubar: true,
        plugins:[
          'a11ychecker',
            'advlist',
            'advcode',
            'advtable',
            'autolink',
            'checklist',
            'export',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'powerpaste',
            'fullscreen',
            'formatpainter',
            'insertdatetime',
            'media',
            'table',
            'help',
            'wordcount',
        ],
        toolbar:
            'undo redo | image | preview | casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
        placeholder: "Start typing here...",
      }}
      />

      <button onClick={handleContentAddition}>
        Add Content
      </button>

      <div>
        {parse(DOMPurify.sanitize(content))}
      </div>
    </>
  )
}

export default App
