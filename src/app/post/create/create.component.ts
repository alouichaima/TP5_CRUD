import { PostService } from './../post.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form!: FormGroup;
  constructor(
    public PostService: PostService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
      });
      }

      get f(){
        return this.form.controls;
        }

        submit(){
          console.log(this.form.value);
          this.PostService.create(this.form.value).subscribe((res
          :any) => {
          console.log('Post created successfully!');
          this.router.navigateByUrl('post/index');
          })
          }
          

}
