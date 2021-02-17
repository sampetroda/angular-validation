import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {FormControl, Validators,FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-article-editor',
  template: `
  <form [formGroup]="artcleGroup" (ngSubmit)="saveArticle()">

      <p> <input type="text" placeholder="Article title" formControlName="title"    /> </p>
      <p> <input type="textarea"  placeholder="Article text" formControlName="text"    /> </p>
  
   <input type="submit" value="Save" />
  </form>
  <hr/>
  <form [formGroup]="loginGroup" (ngSubmit)="Login()">

      <p> <input type="text" placeholder="Article title" formControlName="username"    /> </p>
      <p> <input type="password"  placeholder="Article text" formControlName="password"    /> </p>
  
   <input type="submit" value="Login" />
  </form>
 
  `,
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {
//declare formgroups
  artcleGroup:FormGroup;
  loginGroup:FormGroup;
  // inject the formbuilder
  constructor(@Inject(FormBuilder) formBuilder:FormBuilder){
      this.artcleGroup=formBuilder.group({
        title:[null,Validators.required],
        text:[null,Validators.required]
      });
      this.loginGroup=formBuilder.group({

        username:[null,Validators.required],
        password:[null,Validators.required]
      });
  }
  saveArticle():void {
    if(this.artcleGroup.valid)
    {
      alert('valid');
    }
    else
    {
      alert('artlegroup: missing fields');
    }
   
   }

   Login()
   {
    if(this.loginGroup.valid)
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
