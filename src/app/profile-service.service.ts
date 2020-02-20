import { Injectable } from "@angular/core";
import { UserProfile } from "./interfaces/user-profile";
import { NgForm } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class ProfileServiceService {
  // properties
  userProfile: UserProfile = {
    name: "Melissa",
    contact: "mmrice22@gmail.com",
    bio: "26 y/o lady who likes to climb"
  };
  constructor() {}

  // methods
  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  setUserProfile(form): void {
    this.userProfile = {
      name: form.name,
      contact: form.contact,
      bio: form.bio
    };
  }
}
