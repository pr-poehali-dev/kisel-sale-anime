export interface Kisel {
  id: number;
  name: string;
  dereType: string;
  flavor: string;
  berryType: string;
  calories: number;
  ingredients: string[];
  price: number;
  description: string;
  color: string;
  image: string;
}

export const kisels: Kisel[] = [
  {
    id: 1,
    name: "Сакура-тян",
    dereType: "Дередере",
    flavor: "Клубничный",
    berryType: "Клубника",
    calories: 120,
    ingredients: ["Клубника", "Сахар", "Крахмал", "Вода"],
    price: 250,
    description: "Милая и добрая, всегда улыбается! Нежный клубничный вкус с легкой кислинкой напомнит о весеннем цветении сакуры.",
    color: "#FF6B9D",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400"
  },
  {
    id: 2,
    name: "Мидори-сан",
    dereType: "Кудере",
    flavor: "Киви-мята",
    berryType: "Киви",
    calories: 95,
    ingredients: ["Киви", "Мята", "Крахмал", "Мёд"],
    price: 280,
    description: "Холодная снаружи, но с теплым сердцем. Освежающий вкус киви с нотками мяты для настоящих ценителей.",
    color: "#7ED957",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400"
  },
  {
    id: 3,
    name: "Момо-чан",
    dereType: "Цундере",
    flavor: "Малиновый",
    berryType: "Малина",
    calories: 140,
    ingredients: ["Малина", "Сахар", "Крахмал", "Лимон"],
    price: 270,
    description: "Сначала кислая, но потом раскрывается сладостью! Яркий малиновый вкус с характером.",
    color: "#E91E63",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400"
  },
  {
    id: 4,
    name: "Блюберри-сама",
    dereType: "Дандере",
    flavor: "Черничный",
    berryType: "Черника",
    calories: 110,
    ingredients: ["Черника", "Мёд", "Крахмал", "Ваниль"],
    price: 300,
    description: "Тихая и загадочная, полна антиоксидантов. Глубокий черничный вкус для спокойных моментов.",
    color: "#5E35B1",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400"
  },
  {
    id: 5,
    name: "Ами-тян",
    dereType: "Яндере",
    flavor: "Вишневый",
    berryType: "Вишня",
    calories: 135,
    ingredients: ["Вишня", "Сахар", "Крахмал", "Миндаль"],
    price: 260,
    description: "Безумно любит тебя! Насыщенный вишневый вкус, от которого невозможно оторваться.",
    color: "#C62828",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400"
  },
  {
    id: 6,
    name: "Хани-чан",
    dereType: "Бакадере",
    flavor: "Облепиховый",
    berryType: "Облепиха",
    calories: 105,
    ingredients: ["Облепиха", "Мёд", "Крахмал", "Имбирь"],
    price: 290,
    description: "Немного неуклюжая, но очень милая! Солнечный вкус облепихи с витаминами.",
    color: "#FF9800",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400"
  },
  {
    id: 7,
    name: "Широ-сан",
    dereType: "Камидере",
    flavor: "Белая смородина",
    berryType: "Смородина белая",
    calories: 90,
    ingredients: ["Смородина", "Агар-агар", "Стевия", "Роза"],
    price: 320,
    description: "Элегантная и изысканная, как аристократка. Деликатный вкус белой смородины для истинных гурманов.",
    color: "#F8BBD0",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400"
  },
  {
    id: 8,
    name: "Ая-сама",
    dereType: "Химедере",
    flavor: "Ежевичный",
    berryType: "Ежевика",
    calories: 125,
    ingredients: ["Ежевика", "Тростниковый сахар", "Крахмал", "Базилик"],
    price: 310,
    description: "Королевская и требовательная! Роскошный ежевичный вкус с пряными нотками.",
    color: "#4A148C",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400"
  }
];
