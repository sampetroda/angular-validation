import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-article-editor',
  template: `
  <p>Tags : </p>
  <ul>
     <li *ngFor="let t of tagControls; let i=index">
          <input [formControl]="t" />
          <button (click)="removeTag(i)"> </button>
     </li>
  </ul>
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
  tagControls:FormControl[]=[];
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
