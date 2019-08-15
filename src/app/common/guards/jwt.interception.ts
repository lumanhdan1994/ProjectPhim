import { Injectable } from "@angular/core"
import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpInterceptor
}
    from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"))
        // console.log(token);

        const authReq = req.clone({
            setHeaders: { AuthInterceptor: `Bearer${token.accessToken}` }
        });

        return next.handle(authReq);
    };
}