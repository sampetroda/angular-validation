import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormArray, NgForm} from '@angular/forms';
@Component({
  selector: 'app-article-editor',
  template: `
  <form #f="ngForm" (ngSubmit)="saveArticle(f)">

      <p> <input type="text" placeholder="Article title"  required /> </p>
      <p> <input type="textarea"  placeholder="Article text" required /> </p>
  
   <input type="submit" value="Save" />
  </form>
 
  
 
  `,
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor() { }
 
saveArticle(f:NgForm):void {
 console.log(f);

}
  ngOnInit(): void {
    
  }

}
