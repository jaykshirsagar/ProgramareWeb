import { Injectable } from "@angular/core";
import { count } from "rxjs";
import { Product } from "../product/product.component";

const folder = 'assets/resources/'
const ext = '.jpg'

@Injectable({ providedIn: "root" })

export class ProductService {

    prodCategories : string[] = [
        "glasses",
        "case",
        "lenses"
    ]

    products : Product[] = [{
        id: 0,
        title: "pair",
        description: "descriere",
        price: 15,
        imagePath: folder + 'pair1' + ext,
        category: 'glasses'
    },
    {
        id: 1,
        title: "pair2",
        description: "descriere2",
        price: 20,
        imagePath: folder + 'pair2' + ext,
        category: 'glasses'
    },
    {
        id: 2,
        title: "pair3",
        description: "descriere3",
        price: 10,
        imagePath: folder + 'pair3' + ext,
        category: 'glasses'
    },
    {
        id: 3,
        title: "pair4",
        description: "descriere4",
        price: 25,
        imagePath: folder + 'pair4' + ext,
        category: 'glasses'
    },
    {
        id: 4,
        title: "pair5",
        description: "descriere5",
        price: 7,
        imagePath: folder + 'pair5' + ext,
        category: 'glasses'

    },
    {
        id: 5,
        title: "pair6",
        description: "descriere6",
        price: 12,
        imagePath: folder + 'pair6' + ext,
        category: 'glasses'

    },
    {
        id: 6,
        title: "pair7",
        description: "descriere6",
        price: 12,
        imagePath: folder + 'pair7' + ext,
        category: 'glasses'

    },
    {
        id: 7,
        title: "pair8",
        description: "descriere6",
        price: 12,
        imagePath: folder + 'pair8' + ext,
        category: 'glasses'

    },
    {
        id: 8,
        title: "pair9",
        description: "descriere6",
        price: 12,
        imagePath: folder + 'pair9' + ext,
        category: 'glasses'
    },
    {
        id: 9,
        title: "pair10",
        description: "descriere6",
        price: 12,
        imagePath: folder + 'pair10' + ext,
        category: 'glasses'
    },
    {
        id: 10,
        title: "pair11",
        description: "descriere6",
        price: 12,
        imagePath: folder + 'pair11' + ext,
        category: 'glasses'
    },
    {
        id: 11,
        title: "pair12",
        description: "descriere6",
        price: 12,
        imagePath: folder + 'pair12' + ext,
        category: 'glasses'
    },
    {
        id: 12,
        title: "toc1",
        description: "descriere7",
        price: 18,
        imagePath: folder + 'toc1' + ext,
        category: 'case'
    },
    {
        id: 13,
        title: "toc2",
        description: "descriere7",
        price: 18,
        imagePath: folder + 'toc2' + ext,
        category: 'case'
    },
    {
        id: 14,
        title: "toc3",
        description: "descriere7",
        price: 18,
        imagePath: folder + 'toc3' + ext,
        category: 'case'
    },
    {
        id: 15,
        title: "toc4",
        description: "descriere7",
        price: 19,
        imagePath: folder + 'toc4' + ext,
        category: 'case'
    }]

    getProducts(start: number, stop: number, category: string, minprice : number, maxprice : number, sortCriteriaID: number = 0) {
        let productsCopy = this.products.filter(product => product.category === category && product.price >= minprice && product.price <= maxprice);
        if (sortCriteriaID === 0)
            productsCopy.sort(function (a, b) {
                return a.price - b.price;
            });
        else
            productsCopy.sort(function (a, b) {
                return b.price - a.price;
            });
        productsCopy = productsCopy.splice(start, Math.min(stop, productsCopy.length))
        return productsCopy;
    }

    getCategories(){
        return this.prodCategories;
    }

    getAllProducts(){
        return this.products;
    }

    countProductsOfCriteria(category : string, minprice : number, maxprice : number){
        let counter = 0;
        this.products.forEach(product=>{
            if(product.category === category && product.price >= minprice && product.price <= maxprice)
                counter++;
        })
        return counter;
    }

    getPriceRange(){
        let productsCopy = this.products;
        productsCopy = productsCopy.sort(function(a, b) {
            return b.price - a.price;
        });
        return [productsCopy[0].price, productsCopy[productsCopy.length - 1].price];
    }

    getItemById(id : number){
        let product : Product;
        for(let i=0; i<this.products.length; i++){
            if(this.products[i].id == id){
                return this.products[i];
            }
        }
        return null;
    }

    createProduct(productTitle: string, productDescription: string, price: string, category : string, photoPath : string) {
        const product: Product = {
            id: 1234,
            description: productDescription,
            title: productTitle,
            price: parseInt(price),
            imagePath: photoPath,
            category: category
        };
        return this.products.push(product);
    }
}