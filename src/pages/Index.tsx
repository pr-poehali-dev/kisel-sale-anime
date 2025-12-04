import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { kisels, Kisel } from "@/data/kisels";
import KiselSlider from "@/components/KiselSlider";
import KiselCard from "@/components/KiselCard";
import Cart from "@/components/Cart";
import ThemeToggle from "@/components/ThemeToggle";

interface CartItem extends Kisel {
  quantity: number;
}

export default function Index() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [flavorFilter, setFlavorFilter] = useState("all");
  const [calorieFilter, setCalorieFilter] = useState("all");

  const addToCart = (kisel: Kisel) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === kisel.id);
      if (existing) {
        return prev.map(item =>
          item.id === kisel.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...kisel, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const filteredKisels = kisels.filter(kisel => {
    const matchesSearch = kisel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         kisel.flavor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         kisel.dereType.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFlavor = flavorFilter === "all" || kisel.flavor === flavorFilter;
    
    const matchesCalories = calorieFilter === "all" ||
      (calorieFilter === "low" && kisel.calories < 100) ||
      (calorieFilter === "medium" && kisel.calories >= 100 && kisel.calories <= 120) ||
      (calorieFilter === "high" && kisel.calories > 120);
    
    return matchesSearch && matchesFlavor && matchesCalories;
  });

  const uniqueFlavors = Array.from(new Set(kisels.map(k => k.flavor)));

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Cart items={cartItems} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />
      
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 pt-32 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">✨</div>
          <div className="absolute top-32 right-20 text-4xl">💕</div>
          <div className="absolute bottom-20 left-1/4 text-5xl">🌸</div>
          <div className="absolute top-1/3 right-1/3 text-4xl">⭐</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-semibold mb-6 tracking-tight">
              Аниме Кисели
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
              Каждый кисель — это уникальная аниме-девочка со своим характером
            </p>
          </div>
          
          <KiselSlider kisels={kisels} onAddToCart={addToCart} />
        </div>
      </section>
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-4 tracking-tight">Полный каталог</h2>
            <p className="text-lg text-muted-foreground font-light">
              Выбери свою идеальную вайфу-кисель
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12 space-y-6">
            <div className="relative liquid-glass rounded-2xl p-1">
              <Icon name="Search" className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск по имени, вкусу или типажу..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 h-16 text-lg bg-transparent border-0 focus-visible:ring-0 font-light"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="liquid-glass rounded-2xl p-6">
                <label className="text-sm font-medium mb-3 block">Вкус</label>
                <Select value={flavorFilter} onValueChange={setFlavorFilter}>
                  <SelectTrigger className="h-12 bg-transparent border-0 focus:ring-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass rounded-xl">
                    <SelectItem value="all">Все вкусы</SelectItem>
                    {uniqueFlavors.map(flavor => (
                      <SelectItem key={flavor} value={flavor}>{flavor}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="liquid-glass rounded-2xl p-6">
                <label className="text-sm font-medium mb-3 block">Калорийность</label>
                <Select value={calorieFilter} onValueChange={setCalorieFilter}>
                  <SelectTrigger className="h-12 bg-transparent border-0 focus:ring-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass rounded-xl">
                    <SelectItem value="all">Любая</SelectItem>
                    <SelectItem value="low">Низкая (&lt;100 ккал)</SelectItem>
                    <SelectItem value="medium">Средняя (100-120 ккал)</SelectItem>
                    <SelectItem value="high">Высокая (&gt;120 ккал)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredKisels.map((kisel) => (
              <KiselCard key={kisel.id} kisel={kisel} onAddToCart={addToCart} />
            ))}
          </div>
          
          {filteredKisels.length === 0 && (
            <div className="text-center py-16">
              <div className="text-7xl mb-4">😢</div>
              <p className="text-xl text-muted-foreground">
                Не найдено киселей по заданным фильтрам
              </p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight">О наших киселях</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="liquid-glass p-8 rounded-3xl smooth-transition hover:scale-[1.02] animate-fade-in">
                <div className="text-4xl mb-4">🍓</div>
                <h3 className="text-xl font-semibold mb-3">Натуральные ингредиенты</h3>
                <p className="text-muted-foreground font-light">
                  Только настоящие ягоды и фрукты, никаких искусственных добавок
                </p>
              </div>
              
              <div className="liquid-glass p-8 rounded-3xl smooth-transition hover:scale-[1.02] animate-fade-in">
                <div className="text-4xl mb-4">💕</div>
                <h3 className="text-xl font-semibold mb-3">Типажи персонажей</h3>
                <p className="text-muted-foreground font-light">
                  Каждый кисель вдохновлён классическими аниме-архетипами
                </p>
              </div>
              
              <div className="liquid-glass p-8 rounded-3xl smooth-transition hover:scale-[1.02] animate-fade-in">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Разная калорийность</h3>
                <p className="text-muted-foreground font-light">
                  От диетических (90 ккал) до питательных (140 ккал) вариантов
                </p>
              </div>
              
              <div className="liquid-glass p-8 rounded-3xl smooth-transition hover:scale-[1.02] animate-fade-in">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Яркие вкусы</h3>
                <p className="text-muted-foreground font-light">
                  От нежной клубники до насыщенной ежевики — выбор для каждого
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-6 opacity-50">✨💕🌸</div>
          <h3 className="text-3xl font-semibold mb-3 tracking-tight">Аниме Кисели</h3>
          <p className="mb-8 opacity-70 font-light">
            Свяжитесь с нами для оформления заказа
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="outline" size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Icon name="Mail" size={20} className="mr-2" />
              kawaii@kisels.ru
            </Button>
          </div>
          <p className="mt-8 text-sm text-purple-200">
            © 2024 Аниме Кисели. Сделано с любовью к аниме 💕
          </p>
        </div>
      </footer>
    </div>
  );
}