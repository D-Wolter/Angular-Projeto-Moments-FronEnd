import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Coment } from '../Coment';
import { Response } from '../Response';

import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}api/moments`;

  constructor(private http: HttpClient) { }

  createComment(data: Coment): Observable<Response<Coment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Coment>>(url, data);
  }
}
