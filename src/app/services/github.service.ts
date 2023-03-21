import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubUser } from '../models/github-user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  /**
   * The function takes a string as an argument, and returns an Observable of type GitHubUser or any
   * @param {string} username - string - The username of the GitHub user you want to get.
   * @returns Observable<GitHubUser>
   */
  async getUserGithub(username: string): Promise<Observable<GitHubUser>> {
    return await this.http.get<GitHubUser>('https://api.github.com/users/'+username) as Observable<GitHubUser>;
  }
}
