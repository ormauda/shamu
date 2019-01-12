import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ControllerService {

    constructor(private http: HttpClient) { }

    motor(command: string): Observable<void> {

        const baseUrl = 'http://192.168.43.58';
        const url = `${baseUrl}/propolsion/${command}`;
        return this.http.get<void>(url, { responseType: 'text' as 'json'});
        // return this.http.get<string>(url, {
        //     params: { command }
        // });
    }

}
