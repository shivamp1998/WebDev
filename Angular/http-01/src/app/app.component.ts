import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://custom-octagon-264317-default-rtdb.firebaseio.com/posts.json', postData).subscribe( responseData => {
      console.log(responseData)
    })
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
  private fetchPosts() {
    this.isFetching = true;
    this.http.get('https://custom-octagon-264317-default-rtdb.firebaseio.com/posts.json').pipe(map(responseData=> {
      const postsArray = [];
      for (const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          postsArray.push({...responseData[key], id: key});
        }
      }
      return postsArray;
    })).subscribe( posts => {
      this.loadedPosts = posts;
      this.isFetching = false;;
      console.log(isFetching)
    });
  }
}
