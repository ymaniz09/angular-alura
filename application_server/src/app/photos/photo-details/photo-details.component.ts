import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';


@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);

    // The user tries to access a deleted or invalid picture
    this.photo$.subscribe(() => { }, err => {
      this.router.navigate(['not-found']);
    });
  }

  removePhoto() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(
        () => {
          this.alertService.success('Photo Removed!', true);
          this.router.navigate(['/user', this.userService.getUserName()]);
        },
        err => {
          console.log(err);
          this.alertService.warning('Could not remove photo!');
        });
  }

  like(photo: Photo) {
    this.photoService
      .like(photo.id)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      });
  }
}
