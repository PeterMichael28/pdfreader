import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware";


export default function authMiddleware(req: any) {
    return withAuth(req);
}
export const config = {
    matcher: ['/dashboard/:path*', '/auth-callback']
};

