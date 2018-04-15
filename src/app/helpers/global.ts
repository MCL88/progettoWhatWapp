//Importo la classe personalizzata Article e un insieme di articoli
import {Article} from '../model/article';
import {ARTICLES} from '../mock/mock-article';

export class GlobalApp
{
//Memorizzo gli articoli in memoria
    articles: Article[];
    id:number = 1;
    constructor()
    {
        this.articles = ARTICLES;
    }

    public localStorageItem(id: string): string {
        return localStorage.getItem(id);
    }

    public logout():void{
        localStorage.clear();
    }

}