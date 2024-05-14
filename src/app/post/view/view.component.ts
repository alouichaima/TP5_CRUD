import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  standalone: true,

})
export class ViewComponent {
  id!: number;
  post!: Post;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
  public postService: PostService,
  private route: ActivatedRoute,
  private router: Router
  ) { }
  /**
  * Write code on Method
  *
  * @return response()
  */
  ngOnInit(): void {
  this.id = this.route.snapshot.params['postId'];
  this.postService.find(this.id).subscribe((data:
  Post)=>{
  this.post = data;
  });
  }
}
