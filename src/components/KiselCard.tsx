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
    <Card className="group overflow-hidden liquid-glass border-0 smooth-transition hover:scale-[1.02] hover:shadow-2xl">
      <div className="h-72 relative overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/10">
        <img 
          src={kisel.image} 
          alt={kisel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <Badge 
          className="absolute top-4 right-4 text-xs font-medium shadow-lg backdrop-blur-sm"
          style={{ backgroundColor: kisel.color + 'E6', color: '#fff' }}
        >
          {kisel.dereType}
        </Badge>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-1 tracking-tight">{kisel.name}</h3>
          <p className="text-sm text-muted-foreground font-light">{kisel.flavor}</p>
        </div>
        
        <p className="text-sm line-clamp-2 font-light leading-relaxed">{kisel.description}</p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs font-light bg-secondary/50 border-0">
            <Icon name="Flame" size={12} className="mr-1" />
            {kisel.calories} ккал
          </Badge>
          <Badge variant="outline" className="text-xs font-light bg-secondary/50 border-0">
            <Icon name="Cherry" size={12} className="mr-1" />
            {kisel.berryType}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-3xl font-semibold tracking-tight" style={{ color: kisel.color }}>
            {kisel.price}₽
          </span>
          <Button 
            onClick={() => onAddToCart(kisel)}
            className="smooth-transition hover:scale-105 rounded-full px-6"
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