import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API_URL + '/' + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(API_URL + '/' + userName + '/photos', { params });
    }

    upload(description: string, allowComments: boolean, imageFile: File) {
        const formData = new FormData();

        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', imageFile);

        return this.http.post(API_URL + '/photos/upload', formData);

    }

    findById(photoId: number) {
        return this.http.get<Photo>(API_URL + '/photos/' + photoId);
    }

    getComments(photoId: number) {
        return this.http.get<PhotoComment[]>(API_URL + '/photos/' + photoId + '/comments');
    }

    addComment(photoId: number, commentText: string) {
        return this.http.post(API_URL + '/photos/' + photoId + '/comments', { commentText });
    }

    removePhoto(photoId: number) {
        return this.http.delete(API_URL + '/photos/' + photoId);
    }

    like(photoId: number) {
        // The API returns 304 if the photo is already liked by the user, thus we'll return it as false rather
        // raising the error
        return this.http.post(API_URL + '/photos/' + photoId + '/like', {}, { observe: 'response' })
            .pipe(map(res => true))
            .pipe(catchError(err => {
                return err.status == '304' ? of(false) : throwError(err);
            }));
    }
}
