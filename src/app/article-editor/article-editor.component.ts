import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-editor',
  template: `
  <input [value]="title" (input)="title=$event.target.value" /> 
  <input [value]="title" (input)="title=$event.target.value" />
  <h2>{{title}}</h2>
 
  `,
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor() { }
title:string ="angular ";
  ngOnInit(): void {
  }

}
