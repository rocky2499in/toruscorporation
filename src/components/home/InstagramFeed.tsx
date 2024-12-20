import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Mock Instagram data (replace with real Instagram API integration)
const instagramPosts = [
  {
    id: 1,
    imageUrl: "/lovable-uploads/9546de80-6067-4f12-bd9c-2683312f8d98.png",
    caption: "Precision engineering meets explosive technology",
    likes: 245
  },
  {
    id: 2,
    imageUrl: "/lovable-uploads/820b9b98-d755-4f2e-b96d-3838171f37c9.png",
    caption: "Advanced components for maximum performance",
    likes: 189
  },
  {
    id: 3,
    imageUrl: "/lovable-uploads/d392e7cf-bd63-4e75-ac87-617cc79c6189.png",
    caption: "Technology transfer solutions",
    likes: 321
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-600">Stay updated with our latest innovations and developments</p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {instagramPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-square">
                      <img
                        src={post.imageUrl}
                        alt={post.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <p className="text-sm mb-2">{post.caption}</p>
                          <span className="flex items-center justify-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default InstagramFeed;