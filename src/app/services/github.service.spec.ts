import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from './github.service';
import { GitHubUser } from '../models';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service github api success get', async () => {
    (await service.getUserGithub("mojombo")).subscribe((result: GitHubUser) => {
      expect(result).toBeDefined();
      expect(typeof result).toBe('GitHubUser');
    });
  });
});
