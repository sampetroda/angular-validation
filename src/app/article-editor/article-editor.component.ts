import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,NgForm} from '@angular/forms';
@Component({
  selector: 'app-article-editor',
  template: `
  <form #f="ngForm" (ngSubmit)="saveArticle(f)">

      <p> <input type="text" placeholder="Article title"  ngModel  /> </p>
      <p> <input type="textarea"  placeholder="Article text" ngModel  /> </p>
  
   <input type="submit" value="Save" />
  </form>
 
  `,
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  saveArticle(f:NgForm):void {
    console.log(f);
   
   }
  ngOnInit(): void {
  }

}
