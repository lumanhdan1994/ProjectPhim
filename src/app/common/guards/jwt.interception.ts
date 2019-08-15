import { Injectable } from "@angular/core"
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
}
    from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"))
        console.log(token.inforUser.accessToken);

        const authReq = req.clone({
            setHeaders: { Authorization : `Bearer ${token.inforUser.accessToken}` }
        });

        return next.handle(authReq);
    };
}