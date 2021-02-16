import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-editor',
  template: `
  <input [ngModel]="title" (ngModelChange)="title=$event"> 
  <input [ngModel]="title" (ngModelChange)="title=$event">
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
