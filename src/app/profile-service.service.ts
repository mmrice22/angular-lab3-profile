import { Injectable } from "@angular/core";
import { UserProfile } from "./interfaces/user-profile";
import { format } from "path";
import { NgForm } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class ProfileServiceService {
  userProfile: UserProfile = {
    name: "Melissa",
    contact: "mmrice22@gmail.com",
    bio: "26 y/o lady who likes to climb"
  };
  constructor() {}

  getUserProfile() {
    return this.userProfile;
  }

  setUserProfile(form) {
    this.userProfile = {
      name: form.name,
      contact: form.contact,
      bio: form.bio
    };
  }
}
