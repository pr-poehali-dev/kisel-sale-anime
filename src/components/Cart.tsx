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
        <Button size="lg" className="fixed top-6 right-6 z-50 hover-scale shadow-lg">
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Корзина
          {totalItems > 0 && (
            <Badge className="ml-2 bg-red-500">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl">Корзина 🛒</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😢</div>
              <p className="text-muted-foreground">Корзина пуста</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-4 p-4 rounded-lg border-2 animate-fade-in"
                  style={{ borderColor: `${item.color}40` }}
                >
                  <div 
                    className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"
                    style={{ border: `2px solid ${item.color}` }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.flavor}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-muted rounded-lg">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="h-8 w-8"
                        >
                          <Icon name="Minus" size={14} />
                        </Button>
                        <span className="font-bold w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Icon name="Plus" size={14} />
                        </Button>
                      </div>
                      
                      <span className="font-bold" style={{ color: item.color }}>
                        {item.price * item.quantity}₽
                      </span>
                      
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => onRemove(item.id)}
                        className="ml-auto h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="border-t-2 pt-4 mt-6 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold">Итого:</span>
                  <span className="text-3xl font-bold text-primary">
                    {totalPrice}₽
                  </span>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 hover-scale"
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