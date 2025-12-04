import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Kisel } from "@/data/kisels";

interface KiselCardProps {
  kisel: Kisel;
  onAddToCart: (kisel: Kisel) => void;
}

export default function KiselCard({ kisel, onAddToCart }: KiselCardProps) {
  return (
    <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-64 relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
        <img 
          src={kisel.image} 
          alt={kisel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge 
          className="absolute top-3 right-3 text-xs font-bold shadow-lg"
          style={{ backgroundColor: kisel.color, color: '#fff' }}
        >
          {kisel.dereType}
        </Badge>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="text-xl font-bold mb-1">{kisel.name}</h3>
          <p className="text-sm text-muted-foreground">{kisel.flavor}</p>
        </div>
        
        <p className="text-sm line-clamp-2">{kisel.description}</p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            <Icon name="Flame" size={12} className="mr-1" />
            {kisel.calories} ккал
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Icon name="Cherry" size={12} className="mr-1" />
            {kisel.berryType}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold" style={{ color: kisel.color }}>
            {kisel.price}₽
          </span>
          <Button 
            onClick={() => onAddToCart(kisel)}
            className="hover-scale"
            style={{ backgroundColor: kisel.color }}
          >
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}