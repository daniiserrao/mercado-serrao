import { Injectable  } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Products } from "./model/products";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
}) 

export class ProductService {
    url = 'https://sheet.best/api/sheets/2692f5a8-294f-435c-b691-08777f5837f7';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'aplication/json'})
    }

    constructor(private httpClient: HttpClient) {

    }

    getProducts(): Observable<Products[]> {
        return this.httpClient.get<Products[]>(this.url)
    }
}