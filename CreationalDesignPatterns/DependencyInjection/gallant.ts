// In this version, you have to pass in the dependencies
// Because they're already initialized, the ProfileService class doesn't need to know how to create instances of the dependencies anymore
// The DI container is the entity that knows how to make everything work together. For example, it knows the ProfileService needs an instance of the UsersService, HttpClient, and Endpoints

export class ProfileService {
  private _usersService: UsersService;
  private _httpClient: HttpClient;
  private _endpoints: Endpoints;

  public constructor(
    usersService: UsersService,
    httpClient: HttpClient,
    endpoints: Endpoints,
  ) {
    this._usersService = usersService;
    this._httpClient = httpClient;
    this._endpoints = endpoints;
  }
}
