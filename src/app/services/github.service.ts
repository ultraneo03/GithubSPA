import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubUser } from '../models/github-user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserGithub(username: string): Observable<GitHubUser | any> {
    return this.http.get<GitHubUser>('https://api.github.com/users/'+username) as Observable<GitHubUser |any>;
  }
}
