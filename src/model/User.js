// Author: Tyler, Jason, Boualem, Marcus
export default class User {
  constructor(
    username,
    password,
    followerCount,
    points,
    firstName,
    lastName,
    email,
    aboutMe
  ) {
    this.username = username;
    this.password = password;
    this.followerCount = followerCount;
    this.points = points;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.aboutMe = aboutMe;
  }

  // Setters ---------
  set username(username) {
    this.username = username;
  }

  set password(password) {
    this.password = password;
  }

  set followerCount(followerCount) {
    this.followerCount = followerCount;
  }

  set points(points) {
    this.points = points;
  }

  set firstName(firstName) {
    this.firstName = firstName;
  }

  set lastName(lastName) {
    this.lastName = lastName;
  }

  set email(email) {
    this.email = email;
  }

  set aboutMe(aboutMe) {
    this.aboutMe = aboutMe;
  }

  // Getters ---------

  get username() {
    return this.username;
  }

  get password() {
    return this.password;
  }

  get followerCount() {
    return this.followerCount;
  }

  get points() {
    return this.points;
  }

  get firstName() {
    return this.firstName;
  }

  get lastName() {
    return this.lastName;
  }

  get email() {
    return this.email;
  }

  get aboutMe() {
    return this.aboutMe;
  }
  
}
