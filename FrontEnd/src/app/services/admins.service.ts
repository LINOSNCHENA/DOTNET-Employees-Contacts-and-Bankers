import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  baseUrl2 = 'http://localhost:5002/Employees';
  baseUrl = "https://localhost:5002/Employees";

  constructor(private httpClient: HttpClient) { }

  saveadminactive(adminactive: any) {
    return this.httpClient.post(this.baseUrl, adminactive);
  }

  updateadminactive(adminactive:
    { id: number; name: any; email: any; createdat: number; office: any; mobile: any; stars: any; }) {
    return this.httpClient.put(this.baseUrl, adminactive);
  }

  getAlladminactives() {
    return this.httpClient.get(this.baseUrl);
  }

  getadminactiveById(id: string) {
    return this.httpClient.get(this.baseUrl + '/' + id);
  }

  deleteadminactive(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }
}
