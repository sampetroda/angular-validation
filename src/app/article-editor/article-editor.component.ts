import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,NgForm} from '@angular/forms';
@Component({
  selector: 'app-article-editor',
  template: `
  <form #f="ngForm" (ngSubmit)="saveArticle(f)">

      <p> <input type="text" placeholder="Article title" name="title"  ngModel required /> </p>
      <p> <input type="textarea"  placeholder="Article text" name="text" ngModel required  /> </p>
  
   <input type="submit" value="Save" />
  </form>
 
  `,
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  saveArticle(f:NgForm):void {
    if(f.form.valid)
    {
      alert('valid');
    }
    else
    {
      alert('missing fields');
    }
   
   }
  ngOnInit(): void {
  }

}
