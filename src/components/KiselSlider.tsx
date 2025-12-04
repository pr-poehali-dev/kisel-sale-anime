import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Kisel } from "@/data/kisels";

interface KiselSliderProps {
  kisels: Kisel[];
  onAddToCart: (kisel: Kisel) => void;
}

export default function KiselSlider({ kisels, onAddToCart }: KiselSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentKisel = kisels[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % kisels.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + kisels.length) % kisels.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <div 
        className="rounded-3xl p-8 md:p-12 transition-all duration-500 animate-fade-in"
        style={{ 
          background: `linear-gradient(135deg, ${currentKisel.color}20, ${currentKisel.color}40)`,
          border: `3px solid ${currentKisel.color}80`
        }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <div 
                className="inline-block px-4 py-2 rounded-full text-white font-bold mb-4"
                style={{ backgroundColor: currentKisel.color }}
              >
                {currentKisel.dereType} 💕
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                {currentKisel.name}
              </h2>
              <p className="text-xl text-muted-foreground">{currentKisel.flavor}</p>
            </div>
            
            <p className="text-lg">{currentKisel.description}</p>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
                <Icon name="Flame" size={18} />
                <span className="font-semibold">{currentKisel.calories} ккал</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
                <Icon name="Cherry" size={18} />
                <span className="font-semibold">{currentKisel.berryType}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <span 
                className="text-4xl font-bold"
                style={{ color: currentKisel.color }}
              >
                {currentKisel.price}₽
              </span>
              <Button 
                size="lg"
                onClick={() => onAddToCart(currentKisel)}
                className="hover-scale text-lg px-8"
                style={{ backgroundColor: currentKisel.color }}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Добавить в корзину
              </Button>
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 flex items-center justify-center">
            <div 
              className="text-9xl animate-scale-in"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))' }}
            >
              ✨
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
        <Button
          size="icon"
          variant="outline"
          onClick={prevSlide}
          className="rounded-full w-12 h-12 shadow-lg hover-scale bg-background"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          className="rounded-full w-12 h-12 shadow-lg hover-scale bg-background"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {kisels.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8' : 'opacity-50'
            }`}
            style={{ 
              backgroundColor: index === currentIndex ? currentKisel.color : '#ccc'
            }}
          />
        ))}
      </div>
    </div>
  );
}
