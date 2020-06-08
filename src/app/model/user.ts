export class User {
   _id: string;
  private _name: string;
  private _firstname: string;
  private _email: string;
  private _password: string;
  private _isAdmin: boolean;
  private _groupId: string;
  private _active: boolean;
  constructor(id: string, name: string, firstname: string, email: string, password: string, isAdmin: boolean, groupId: string, active: boolean) {
    this._id = id;
    this._name = name;
    this._firstname = firstname;
    this._email = email;
    this._password = password;
    this._isAdmin = isAdmin;
    this._groupId = groupId;
    this._active = active;
  }
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }


  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  get groupId(): string {
    return this._groupId;
  }

  set groupId(value: string) {
    this._groupId = value;
  }
}
