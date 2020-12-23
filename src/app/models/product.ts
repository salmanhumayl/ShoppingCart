export class Product {
  id: number;
  name: string;
  description:string;
  price :number;
  qty:number=1;
  imageUrl:string;

  reviewCounter: number;
  reviews: string[];
  ratingCounter: number;
  ratings: number[];
  avg: number;
  extraImages: string[];


   constructor(id,name,description='',price=0,
              imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKpQUnqvseI772-7SwU_seZ2wCwd_fIKyW4A&usqp=CAU',
              reviewCounter: number, reviews: string[],
              ratingCounter: number, ratings: number[], avg: number,
              extraImg:string[]  ){
      this.id=id;
      this.name=name;
      this.description=description;
      this.price=price;
      this.imageUrl=imageUrl;
      this.reviewCounter = reviewCounter;
      this.reviews = reviews;
      this.ratingCounter = ratingCounter;
      this.ratings = ratings;
      this.avg = avg;
      this.extraImages=extraImg




  }
}
