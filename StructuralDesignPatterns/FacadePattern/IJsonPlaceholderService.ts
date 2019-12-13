import { Album } from './models/Album';
import { Comment } from './models/Comment';
import { Photo } from './models/Photo';
import { Post } from './models/Post';
import { ToDo } from './models/ToDo';
import { User } from './models/User';

export interface IJsonPlaceholderService {
  getAlbums(): Promise<Album[]>;
  getComments(): Promise<Comment[]>;
  getPhotos(): Promise<Photo[]>;
  getPosts(): Promise<Post[]>;
  getToDos(): Promise<ToDo[]>;
  getUsers(): Promise<User[]>;
}
