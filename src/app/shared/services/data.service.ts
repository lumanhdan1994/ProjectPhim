import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

let urlAPI = "";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {
    urlAPI = environment.urlApi;
  }

  get(uri: string): Observable<any> {
    return this.http.get(urlAPI + "/" + uri).pipe(
      tap(
        () => {
          //Thành công
          //Xử lý loading
        },
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }

  post(uri: string, data?: object): Observable<any> {
    return this.http.post(urlAPI + "/" + uri, data, httpOptions).pipe(
      tap(
        () => {},
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }

  put(uri: string, data?: object): Observable<any> {
    return this.http.put(urlAPI + "/" + uri, data, httpOptions).pipe(
      tap(
        () => {},
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }

  delete(uri: string): Observable<any> {
    return this.http.delete(urlAPI + "/" + uri).pipe(
      tap(
        () => {},
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }

  handleErr(err) {
    if (err.codeStatus === 404) {
      //Các bạn viết thêm Noti hiển thị cho người dùng thấy thông báo lỗi
      console.log(err.message);
    }

    return err;

    // if (error.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   this._notificationService.printErrorMessage(
    //     "Something went wrong, please try again later."
    //   );
    //   return throwError("Something went wrong, please try again later.");
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,

    //   switch (error.status) {
    //     case serverStatus:
    //       this._notificationService.printErrorMessage(
    //         "Internal server error, please try again later."
    //       );
    //       break;

    //     case serverresource:
    //       this._notificationService.printErrorMessage("404 Not Found.");
    //       // return throwError("404");
    //       break;

    //     case serverBadRequest:
    //       this._notificationService.printErrorMessage("400 Bad request");
    //       break;

    //     case serverUnauth:
    //       this._notificationService.printErrorMessage("401 Unauthorized error");
    //       break;

    //     case serverExpectation:
    //       this._notificationService.printErrorMessage("417 Expectation Failed");
    //       break;

    //     default:
    //       break;
    //   }

    //   // if (error.status === serverStatus) {
    //   //   this._notificationService.printErrorMessage(
    //   //     "Internal server error, please try again later."
    //   //   );
    //   //   return throwError("Internal server error, please try again later.");
    //   // }
    //   // if (error.status === serverresource) {
    //   //   this._notificationService.printErrorMessage("404 Not Found.");
    //   //   return throwError("404");
    //   // }
    //   // if (error.status === serverBadRequest) {
    //   //   this._notificationService.printErrorMessage("400 Bad request");
    //   //   return throwError("400");
    //   // }
    //   // if (error.status === serverUnauth) {
    //   //   return throwError("401");
    //   // }
    //   return throwError("Something went wrong, please try again later.");
    // }
  }
}
