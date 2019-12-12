// The problem with this is in the way the constructor is set up.
// It requires the UsersService, HttpClient, and Endpoints objects to already be available
// If you try to instantiate this, you don't know what its dependencies are.

export class ProfileService {
  private _userService: UsersService;
  private _httpClient: HttpClient;
  private _endpoints: Endpoints;

  public constructor() {
    this._userService = new UsersService();
    this._httpClient = new HttpClient();
    this._endpoints = new Endpoints();
  }
}
