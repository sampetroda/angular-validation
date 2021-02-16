import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-editor',
  template: `
  <input [(ngModel)]="title"> 
  <input [(ngModel)]="title"> 
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
