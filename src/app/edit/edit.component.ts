import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
// interfaces
import { UserProfile } from "../interfaces/user-profile";
// services
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  //  gonna call the setUserProfile() from our service in this component
  userProfile: UserProfile;

  constructor(
    private service: ProfileServiceService,
    private routerInstance: Router
  ) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }

  update(form: NgForm) {
    this.service.setUserProfile(form.value);
    // console.log(form);
    this.routerInstance.navigate(["profile"]);
  }
}
