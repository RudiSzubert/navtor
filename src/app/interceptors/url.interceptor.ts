import { inject } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';

export function urlInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
const apiURL = inject(API_URL);
  if (!req.url.startsWith('http')) {
    const apiReq = req.clone({ url: `${apiURL}${req.url}` });
    return next(apiReq);
  }
  return next(req);
}
