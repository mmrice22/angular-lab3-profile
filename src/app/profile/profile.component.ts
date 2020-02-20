import { Component, OnInit } from "@angular/core";
// interfaces
import { UserProfile } from "../interfaces/user-profile";
// services
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile;

  // service equals profile service
  constructor(private service: ProfileServiceService) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }
}
