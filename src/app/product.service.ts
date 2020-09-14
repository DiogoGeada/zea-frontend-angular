import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(){
    return [
      {
        imageURL: "https://loremflickr.com/cache/resized/7381_9900873026_d20bd13c54_q_150_150_nofilter.jpg",
        productName: "Product 1",
        releaseDate: "May 31, 2016",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laboriosam voluptatem sequi eos rerum ipsam",
        rating: 4,
        numOfReviews: 2 
      },
      {
        imageURL: "https://loremflickr.com/cache/resized/65535_49933319523_2efc20f016_q_150_150_nofilter.jpg",
        productName: "Product 2",
        releaseDate: "September 12, 2016",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laboriosam voluptatem sequi eos rerum ipsam",
        rating: 2,
        numOfReviews: 28 
      },
      {
        imageURL: "https://loremflickr.com/cache/resized/65535_49865787373_38e1e49e54_q_150_150_nofilter.jpg",
        productName: "Product 3",
        releaseDate: "October 1, 2016",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laboriosam voluptatem sequi eos rerum ipsam",
        rating: 3,
        numOfReviews: 7 
      }
    ]
  }

}
