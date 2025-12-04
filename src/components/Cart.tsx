import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Kisel } from "@/data/kisels";

interface CartItem extends Kisel {
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export default function Cart({ items, onUpdateQuantity, onRemove }: CartProps) {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg" className="fixed top-6 right-6 z-50 smooth-transition hover:scale-105 shadow-2xl liquid-glass rounded-full">
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Корзина
          {totalItems > 0 && (
            <Badge className="ml-2 bg-foreground text-background rounded-full">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto liquid-glass border-l-0">
        <SheetHeader>
          <SheetTitle className="text-3xl font-semibold tracking-tight">Корзина</SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 opacity-30">😢</div>
              <p className="text-muted-foreground font-light">Корзина пуста</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl liquid-glass border-0 animate-fade-in"
                >
                  <div 
                    className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg tracking-tight">{item.name}</h4>
                      <p className="text-sm text-muted-foreground font-light">{item.flavor}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="h-8 w-8 rounded-full hover:bg-secondary"
                        >
                          <Icon name="Minus" size={14} />
                        </Button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-full hover:bg-secondary"
                        >
                          <Icon name="Plus" size={14} />
                        </Button>
                      </div>
                      
                      <span className="font-semibold text-lg" style={{ color: item.color }}>
                        {item.price * item.quantity}₽
                      </span>
                      
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => onRemove(item.id)}
                        className="ml-auto h-9 w-9 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="border-t border-border/50 pt-6 mt-6 space-y-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium">Итого:</span>
                  <span className="text-4xl font-semibold tracking-tight">
                    {totalPrice}₽
                  </span>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full text-lg py-7 smooth-transition hover:scale-105 rounded-full bg-foreground hover:bg-foreground/90"
                >
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}