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

  /**
   * The constructor function is used to initialize the component class properties
   * @param {GithubService} gitHubService - This is the service we created earlier.
   * @param {FormBuilder} fb - FormBuilder - This is the Angular FormBuilder service.
   */
  constructor(private gitHubService: GithubService, private fb: FormBuilder) {
    // load validations for login form
    this.searchGroup = this.fb.group({
      username: ['', [Validators.required]]      
    });
   }

  ngOnInit(): void {

  }

 /**
  * The function checks if the form is valid, if it is, it sets the firstUse variable to false, then it
  * calls the getUserGithub function from the GitHubService, passing the username value from the form.
  * If the call is successful, it sets the gitHubUser variable to the result, sets the userFound
  * variable to true, and logs the result to the console. If the call is unsuccessful, it logs the
  * error to the console and sets the userFound variable to false
  */
  async getGitHubUserInformation(){
    if(this.searchGroup.valid){
      (await this.gitHubService.getUserGithub(this.username?.value)).subscribe(
        (result)=> {
          this.gitHubUser=result;
          this.userFound = true;
          this.firstUse = false;
        },
        error => {
          console.log(error);
          this.userFound = false;
          this.firstUse = false;
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
