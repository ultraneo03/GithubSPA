import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GitHubUser } from 'src/app/models/github-user.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * @param {boolean} userFound flag to mark if user is found
   */
  userFound: boolean = false;
  
  /**
   * @param {FormGroup} searchGroup form search by username
   */
  searchGroup: FormGroup;

  /**
   * @param {boolean} userFound flag to mark if user is first search
   */
  firstUse: boolean = true;

  gitHubUser?: GitHubUser;

  constructor(private gitHubService: GithubService, private fb: FormBuilder) {
    // load validations for login form
    this.searchGroup = this.fb.group({
      username: ['', [Validators.required]]      
    });
   }

  ngOnInit(): void {

  }

  getGitHubUserInformation(){
    if(this.searchGroup.valid){
      this.firstUse = false;
      this.gitHubService.getUserGithub(this.username?.value).subscribe(
        (result)=> {
          this.gitHubUser=result;
          this.userFound = true;
          console.log(this.gitHubUser);
        },
        error => {
          console.log(error);
          this.userFound = false;
        }
      )
    }
  }

   /**
   * Method to get the email fill in the login form
   * @method
   */
   get username() {
    return this.searchGroup.get('username');
  }
}
