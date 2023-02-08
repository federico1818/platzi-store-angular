import { Component, OnInit } from '@angular/core'
import { CategoryService } from 'src/app/services/category.service'
import { Category } from 'src/app/category'

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
    public categories: Category[] = []

    constructor(
        private _categoryService: CategoryService
    ) {}

    public ngOnInit(): void {
        this.getAllCategories()
    }

    public getAllCategories(): void {
        this._categoryService.all().subscribe((categories: Category[]) => {
            this.categories = categories
        })
    }
}
