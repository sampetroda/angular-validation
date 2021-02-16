import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-article-editor',
  template: `
  <p>Article :<input [formControl]='titleControl' /> </p>
  <p>Text :<input [formControl]='textControl' /> </p>
  <hr/>
  <p> preview:</p>
  <div>
      <p> Title={{formdata.title}} </p>
      <p> Text={{formdata.text}} </p>
  </div>
  <button (click)="saveArticle()">Save</button>

  <h2>{{formdata.title}}</h2>
 
  `,
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor() { }
  formdata:any={};
title:string ="";
text:string="";
titleControl:FormControl = new FormControl(null,Validators.required);
textControl:FormControl = new FormControl(null,Validators.required);
formGroup:FormGroup = new FormGroup({
  title:this.titleControl,
  text:this.textControl
});
saveArticle():void {
  if(this.formGroup.valid)
  {
      this.formdata= this.formGroup.value;
     // this.text=this.
  }
  else
  {
    alert('Missing Feilds!');
  }
}
  ngOnInit(): void {
  }

}
