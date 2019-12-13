import axios from 'axios';
import { IJsonPlaceholderService } from './IJsonPlaceholderService';
import { Album } from './models/Album';
import { Comment } from './models/Comment';
import { Photo } from './models/Photo';
import { Post } from './models/Post';
import { ToDo } from './models/ToDo';
import { User } from './models/User';

export class JsonPlaceholderService implements IJsonPlaceholderService {
  private _baseUrl: string = 'https://jsonplaceholder.typicode.com';

  private _endpoints = {
    posts: `${this._baseUrl}/posts`,
    comments: `${this._baseUrl}/comments`,
    albums: `${this._baseUrl}/albums`,
    photos: `${this._baseUrl}/photos`,
    todos: `${this._baseUrl}/todos`,
    users: `${this._baseUrl}/users`,
  };
  private _getEntity<T>(url: string): Promise<T[]> {
    return axios.get(url).then(r => r.data as T[]);
  }
  async getAlbums(): Promise<Album[]> {
    return this._getEntity<Album>(this._endpoints.albums);
  }
  async getComments(): Promise<Comment[]> {
    return this._getEntity<Comment>(this._endpoints.comments);
  }
  async getPhotos(): Promise<Photo[]> {
    return this._getEntity<Photo>(this._endpoints.photos);
  }
  async getPosts(): Promise<Post[]> {
    return this._getEntity<Post>(this._endpoints.posts);
  }
  async getToDos(): Promise<ToDo[]> {
    return this._getEntity<ToDo>(this._endpoints.todos);
  }
  async getUsers(): Promise<User[]> {
    return this._getEntity<User>(this._endpoints.users);
  }
}
