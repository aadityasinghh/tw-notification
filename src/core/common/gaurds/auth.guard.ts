// tours-service/src/common/guards/auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, map, of } from 'rxjs';

interface AuthResponse {
  status: number;
  data: {
    userId: string;
    email: string;
    // isEmailVerified: boolean;
    name: string;
  };
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // const authServiceUrl = this.configService.get('AUTH_SERVICE_URL');

    // Get the JWT from the cookies
    const token = request.cookies?.access_token;
    console.log(token);
    if (!token) {
      throw new UnauthorizedException('Authentication token is missing');
    }

    // Call the auth service's validation endpoint
    return this.httpService
      .get<AuthResponse>(`http://localhost:3001/auth/validate`, {
        headers: {
          Cookie: `access_token=${token}`,
        },
      })
      .pipe(
        map((response) => {
          if (response.status === HttpStatus.OK) {
            // Add user data to request for later use
            request.user = response.data.data;
            return true;
          }
          return false;
        }),
        catchError(() => {
          throw new UnauthorizedException(
            'Invalid token or user not authenticated',
          );
        }),
      );
  }
}
