import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/domain/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  constructor(
    private http: HttpClient
  ) { }

  async getCategories() {
    const categories = await (this.http.get('categories').toPromise() as Promise<any[]>);
    this.categories = categories;
  }
}
