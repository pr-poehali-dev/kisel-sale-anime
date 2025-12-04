import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { kisels, Kisel } from "@/data/kisels";
import KiselSlider from "@/components/KiselSlider";
import KiselCard from "@/components/KiselCard";
import Cart from "@/components/Cart";

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
      <Cart items={cartItems} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />
      
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pt-20 pb-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-pulse">✨</div>
          <div className="absolute top-32 right-20 text-4xl animate-pulse delay-100">💕</div>
          <div className="absolute bottom-20 left-1/4 text-5xl animate-pulse delay-200">🌸</div>
          <div className="absolute top-1/3 right-1/3 text-4xl animate-pulse delay-300">⭐</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              Аниме Кисели ✨
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Каждый кисель — это уникальная аниме-девочка со своим характером! 💕
            </p>
          </div>
          
          <KiselSlider kisels={kisels} onAddToCart={addToCart} />
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-background to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Полный каталог 🎀</h2>
            <p className="text-lg text-muted-foreground">
              Выбери свою идеальную вайфу-кисель!
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-8 space-y-4">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск по имени, вкусу или типажу..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-2 block">Вкус</label>
                <Select value={flavorFilter} onValueChange={setFlavorFilter}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все вкусы</SelectItem>
                    {uniqueFlavors.map(flavor => (
                      <SelectItem key={flavor} value={flavor}>{flavor}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-semibold mb-2 block">Калорийность</label>
                <Select value={calorieFilter} onValueChange={setCalorieFilter}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
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
      
      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О наших киселях 📖</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border-2 border-purple-200 animate-fade-in">
                <div className="text-4xl mb-4">🍓</div>
                <h3 className="text-xl font-bold mb-3">Натуральные ингредиенты</h3>
                <p className="text-muted-foreground">
                  Только настоящие ягоды и фрукты, никаких искусственных добавок!
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border-2 border-pink-200 animate-fade-in delay-100">
                <div className="text-4xl mb-4">💕</div>
                <h3 className="text-xl font-bold mb-3">Типажи персонажей</h3>
                <p className="text-muted-foreground">
                  Каждый кисель вдохновлён классическими аниме-архетипами
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border-2 border-blue-200 animate-fade-in delay-200">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Разная калорийность</h3>
                <p className="text-muted-foreground">
                  От диетических (90 ккал) до питательных (140 ккал) вариантов
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border-2 border-purple-200 animate-fade-in delay-300">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">Яркие вкусы</h3>
                <p className="text-muted-foreground">
                  От нежной клубники до насыщенной ежевики — выбор для каждого!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-4">✨💕🌸</div>
          <h3 className="text-2xl font-bold mb-2">Аниме Кисели</h3>
          <p className="mb-6 text-purple-100">
            Свяжитесь с нами для оформления заказа!
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
