import { Injectable } from "@angular/core";
import { HttpClient } from  "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Noticia } from "../model/noticias";

@Injectable()
export class NoticiaService {

    constructor(private http: HttpClient) {}

        getNoticias() : Observable<Noticia[]>{
        return this.http.get<Noticia[]>(
            'http://www.mocky.io/v2/5c61f61d300000600001958c');
        }

}