import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient){}
  createAndStorePosts( title: string, content: string) {
    const postData = {title: title, content: content};
    this.http.post('https://custom-octagon-264317-default-rtdb.firebaseio.com/posts.json', postData).subscribe( responseData => {
      console.log(responseData)
    },
    (error) => {
      this.error.next(error.message);
    }
  )
  }
  fetchPosts() {
    let params = new HttpParams();
    params = params.append('custom','text');
    params = params.append('print','pretty');
    return this.http.get('https://custom-octagon-264317-default-rtdb.firebaseio.com/posts.json', {
      headers: new HttpHeaders({
          'customHeader': 'hello',
      }),
      params: params
    }).pipe(
      map(responseData=> {
        const postsArray = [];
        for (const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
      }
      return postsArray;
    }));
    catchError( (errorRes) => {
      return throwError(errorRes);
    })
  }
  deletePosts() {
    return this.http.delete('https://custom-octagon-264317-default-rtdb.firebaseio.com/posts.json');
  }
}
