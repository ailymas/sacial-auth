import React from 'react'
import {RichTextEditorComponent,HtmlEditor,Link,Image,QuickToolbar,Toolbar,Inject} from '@syncfusion/ej2-react-richtexteditor'
import { Header } from '../components'
import { EditorData } from '../data/dummy'


const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        
        <Inject services={[HtmlEditor,Link,Image,QuickToolbar,Toolbar]} />
      </RichTextEditorComponent>
      
    </div>
  )
}

export default Editor