import { Component, OnInit } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import Marker from '@editorjs/marker';


@Component({
  selector: 'app-editorjs',
  templateUrl: './editorjs.component.html',
  styleUrls: ['./editorjs.component.scss']
})
export class EditorjsComponent implements OnInit {
  editor! : any;

  constructor() { }

  ngOnInit(): void {
    this.editor = new EditorJS( {
      holderId: 'editor-js',
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link']
        },
        list: {
          class: List,
          inlineToolbar: ['link', 'bold']
        },
        marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M'
        }
      }
    });
  }

  // tslint:disable-next-line:typedef
  onSave() {
    this.editor
      .save()
      .then((outputData) => {
        console.log('Article data: ', outputData);
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }


}