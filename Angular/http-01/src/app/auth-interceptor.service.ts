import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      console.log('Request is on its way!');
      const modifiedRequest = req.clone({
        headers: req.headers.append('Auth', 'xyz')
      })
      console.log(req.url)
      return next.handle(modifiedRequest).pipe(tap(event => {
          console.log(event);
          if( event.type === HttpEventType.Response ) {
            console.log("Response Arrived");
          }
      }));
    }
}
