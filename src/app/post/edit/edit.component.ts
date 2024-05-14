import { PostService } from './../post.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
imports: [CommonModule, ReactiveFormsModule],
})
export class EditComponent {
  id!: number;
post!: Post;
form!: FormGroup;

constructor(
  public PostService: PostService,
  private route: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.PostService.find(this.id).subscribe((data:
    Post)=>{
    this.post = data;
    });
    this.form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', Validators.required)
    });
    }
    /**
    * Write code on Method
    *
    * @return response()
    */
    get f(){
    return this.form.controls;
    }
    /**
    * Write code on Method
    *
    * @return response()
    */
    submit(){
    console.log(this.form.value);
    this.PostService.update(this.id,
    this.form.value).subscribe((res:any) => {
    console.log('Post updated successfully!');
    this.router.navigateByUrl('post/index');
    })
    }

}
