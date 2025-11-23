import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images = [
    { id: 1, category: 'christmas', caption: 'Two-story home with red and green Christmas display – Calgary, AB' },
    { id: 2, category: 'everyday', caption: 'Modern bungalow with warm white architectural accent – Edmonton, AB' },
    { id: 3, category: 'sports', caption: 'Flames fan showcasing team colours – Calgary, AB' },
    { id: 4, category: 'christmas', caption: 'Traditional home with multi-colour holiday lights – Lethbridge, AB' },
    { id: 5, category: 'events', caption: 'Purple and gold graduation celebration – Kelowna, BC' },
    { id: 6, category: 'everyday', caption: 'Contemporary home with blue architectural lighting – Calgary, AB' },
    { id: 7, category: 'sports', caption: 'Oilers supporter with team blue and orange – Edmonton, AB' },
    { id: 8, category: 'christmas', caption: 'Classic white Christmas lights on heritage home – Calgary, AB' },
    { id: 9, category: 'events', caption: 'Canada Day red and white patriotic display – Lethbridge, AB' },
    { id: 10, category: 'everyday', caption: 'Luxury estate with warm architectural accent – Okanagan, BC' },
    { id: 11, category: 'christmas', caption: 'Gradient green to red holiday display – Edmonton, AB' },
    { id: 12, category: 'sports', caption: 'Stampeders red and white game day colours – Calgary, AB' },
    { id: 13, category: 'events', caption: 'Rainbow pride celebration display – Calgary, AB' },
    { id: 14, category: 'everyday', caption: 'Minimalist white accent lighting – Kelowna, BC' },
    { id: 15, category: 'christmas', caption: 'Twinkling multi-colour Christmas effect – Calgary, AB' },
    { id: 16, category: 'everyday', caption: 'Elegant amber architectural lighting – Edmonton, AB' },
    { id: 17, category: 'events', caption: 'Halloween orange and purple display – Lethbridge, AB' },
    { id: 18, category: 'sports', caption: 'Custom team colours for local school – Calgary, AB' }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'christmas', label: 'Christmas' },
    { id: 'everyday', label: 'Everyday' },
    { id: 'sports', label: 'Sports Teams' },
    { id: 'events', label: 'Special Events' }
  ];

  const filteredImages = filter === 'all'
    ? images
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Gallery
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Explore real EmberBright installations showcasing the transformative power of permanent LED lighting
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium px-4 text-center">
                  {image.caption}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    View Full Size
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-primary-500 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {selectedImage > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 p-2 text-white hover:text-primary-500 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {selectedImage < filteredImages.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 p-2 text-white hover:text-primary-500 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div className="max-w-6xl w-full">
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg shadow-2xl flex items-center justify-center mb-4">
              <span className="text-white text-lg font-medium px-6 text-center">
                {filteredImages[selectedImage].caption}
              </span>
            </div>
            <p className="text-center text-white text-sm">
              {selectedImage + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
