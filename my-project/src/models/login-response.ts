export class LoginResponse {
  pipe(arg0: any): import("rxjs").Observable<LoginResponse> {
    throw new Error('Method not implemented.');
  }
  role: string = '';
  id: string = '';

  constructor(id: string, role: string) {
    this.role = role;
    this.id = id;
  }
}
