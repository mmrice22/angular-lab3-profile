import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";
import { ProfileServiceService } from "../profile-service.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  userProfile: UserProfile;

  constructor(
    private service: ProfileServiceService,
    private routerInstance: Router
  ) {}

  ngOnInit(): void {}

  update(form: NgForm) {
    this.service.setUserProfile(form.value);
    // console.log(form);
    this.routerInstance.navigate(["profile"]);
  }
}
