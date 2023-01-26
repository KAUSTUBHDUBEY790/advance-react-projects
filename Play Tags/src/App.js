import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown,setmarkdown] = useState("## [Markdown-Guide](https://www.markdownguide.org/basic-syntax/)[newtab]");
  return (
  <section className='markdown'>
    <textarea className='input' value={markdown} onChange={(e)=> setmarkdown(e.target.value)}></textarea>

    <article className='result'>
      <ReactMarkdown>{markdown}</ReactMarkdown>

    
    </article>
  </section>
)
}

export default App
