import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMsg => {
      this.error = errorMsg;
    })
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error=> {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    });
    console.log("true");
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe( ()=> {
      this.loadedPosts = [];
    })

  }
  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
  onHandleError() {
    this.error = null;
  }

}
