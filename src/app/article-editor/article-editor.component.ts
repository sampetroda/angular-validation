import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-article-editor',
  template: `
  <p>Tags : </p>
  <ul>
     <li *ngFor="let t of tagControls; let i=index">
          <input [formControl]="t" />
          <button (click)="removeTag(i)">X</button>
     </li>
  </ul>

  <hr/>
  <p><button (click)="addTag()">+</button> </p>
  <button (click)="saveArticle()">Save</button>
  <h2>{{formdata.title}}</h2>
 
  `,
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor() { }
  tagControls:FormControl[]=[];
  formArray:FormArray =new FormArray(this.tagControls);
  addTag():void{
    this.formArray.push(new FormControl(null,Validators.required))
  }
  formdata:any={};
title:string ="";
text:string="";
removeTag(idx:number):void
{
    this.formArray.removeAt(idx);
}
saveArticle():void {
  if(this.formArray.valid)
  {
     // this.formdata= this.formGroup.value;
     // this.text=this.
     alert('validated');
  }
  else
  {
    alert('Missing Feilds!');
  }
}
  ngOnInit(): void {
  }

}
