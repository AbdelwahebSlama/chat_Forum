import {MessageFils} from "./message-fils";

export class Message {
  private _title: string;
  private _content: String;
  private _likes: number;
  private _datecreation: Date;
  private _UserId: string;
  private _groupId: string;
  private _username: string;
  private _comments: MessageFils [  ] ;

  constructor(title: string, content: string,username:string,
  likes: number, datecreation: Date, UserId: string, groupId: string, comments: MessageFils[]) {
    this._title = title;
    this._content = content;
    this._likes = likes;
    this._datecreation = datecreation;
    this._UserId = UserId;
    this._groupId = groupId;
    this._comments = comments;
    this._username = username;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): String {
    return this._content;
  }

  set content(value: String) {
    this._content = value;
  }

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  get datecreation(): Date {
    return this._datecreation;
  }

  set datecreation(value: Date) {
    this._datecreation = value;
  }

  get UserId(): string {
    return this._UserId;
  }

  set UserId(value: string) {
    this._UserId = value;
  }

  get groupId(): string {
    return this._groupId;
  }

  set groupId(value: string) {
    this._groupId = value;
  }
  get comments(): MessageFils[] {
    return this._comments;
  }

  set comments(value: MessageFils[]) {
    this._comments = value;
  }
}
