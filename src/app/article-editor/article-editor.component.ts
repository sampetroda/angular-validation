import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-article-editor',
  template: `
  <p>Article title (required): </p>
  <input [formControl]='titleControl' />
  <button (click)="submitTitle()">Save</button>

  <h2>{{title}}</h2>
 
  `,
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor() { }
title:string ="angular ";
titleControl:FormControl = new FormControl(null,Validators.required);
submitTitle():void {
  if(this.titleControl.valid)
  {
      this.title= this.titleControl.value;
  }
  else
  {
    alert('Title is required');
  }
}
  ngOnInit(): void {
  }

}
