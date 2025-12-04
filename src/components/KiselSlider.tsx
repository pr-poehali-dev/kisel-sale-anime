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
    <div className="relative w-full max-w-5xl mx-auto py-12">
      <div 
        className="liquid-glass rounded-[2.5rem] p-8 md:p-14 smooth-transition animate-fade-in border-0 shadow-2xl"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-7">
            <div>
              <div 
                className="inline-block px-5 py-2 rounded-full text-white font-medium mb-5 shadow-lg"
                style={{ backgroundColor: currentKisel.color }}
              >
                {currentKisel.dereType}
              </div>
              <h2 className="text-5xl md:text-6xl font-semibold mb-3 tracking-tight">
                {currentKisel.name}
              </h2>
              <p className="text-2xl text-muted-foreground font-light">{currentKisel.flavor}</p>
            </div>
            
            <p className="text-lg font-light leading-relaxed">{currentKisel.description}</p>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-secondary/50 px-5 py-3 rounded-full backdrop-blur-sm">
                <Icon name="Flame" size={18} />
                <span className="font-medium">{currentKisel.calories} ккал</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-5 py-3 rounded-full backdrop-blur-sm">
                <Icon name="Cherry" size={18} />
                <span className="font-medium">{currentKisel.berryType}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-5 pt-4">
              <span 
                className="text-5xl font-semibold tracking-tight"
                style={{ color: currentKisel.color }}
              >
                {currentKisel.price}₽
              </span>
              <Button 
                size="lg"
                onClick={() => onAddToCart(currentKisel)}
                className="smooth-transition hover:scale-105 text-lg px-8 py-6 rounded-full shadow-lg"
                style={{ backgroundColor: currentKisel.color }}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Добавить
              </Button>
            </div>
          </div>
          
          <div className="relative h-80 md:h-[28rem] flex items-center justify-center">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src={currentKisel.image} 
                alt={currentKisel.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
        <Button
          size="icon"
          variant="outline"
          onClick={prevSlide}
          className="rounded-full w-14 h-14 shadow-2xl smooth-transition hover:scale-110 liquid-glass border-0"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          className="rounded-full w-14 h-14 shadow-2xl smooth-transition hover:scale-110 liquid-glass border-0"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>
      </div>
      
      <div className="flex justify-center gap-2 mt-8">
        {kisels.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full smooth-transition ${
              index === currentIndex ? 'w-12 opacity-100' : 'w-2 opacity-30'
            }`}
            style={{ 
              backgroundColor: index === currentIndex ? currentKisel.color : '#888'
            }}
          />
        ))}
      </div>
    </div>
  );
}