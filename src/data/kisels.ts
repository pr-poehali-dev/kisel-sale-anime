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
    image: "https://cdn.poehali.dev/projects/63cd2f03-ec83-4499-864f-78c4ae3ab133/files/0955602b-a1e4-4a4e-a1ee-eee60736840e.jpg"
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
    image: "https://cdn.poehali.dev/projects/63cd2f03-ec83-4499-864f-78c4ae3ab133/files/f96fe1dc-09c5-44dc-8e01-f05a7ccc5e7f.jpg"
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
    image: "https://cdn.poehali.dev/projects/63cd2f03-ec83-4499-864f-78c4ae3ab133/files/cefefa50-b4f0-4d30-91dd-3ac0b1426e9d.jpg"
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
    image: "https://cdn.poehali.dev/projects/63cd2f03-ec83-4499-864f-78c4ae3ab133/files/db0306ff-5b6a-4131-8d35-99523e49c420.jpg"
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
    image: "https://cdn.poehali.dev/projects/63cd2f03-ec83-4499-864f-78c4ae3ab133/files/a6a057a6-7815-45cc-b5f3-b2cd8f0f4fb0.jpg"
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
    image: "https://cdn.poehali.dev/projects/63cd2f03-ec83-4499-864f-78c4ae3ab133/files/9a749159-13bf-4ba6-a1e6-29d774ccaa25.jpg"
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
    image: "https://cdn.poehali.dev/projects/63cd2f03-ec83-4499-864f-78c4ae3ab133/files/3dc7bae4-e0ff-45ac-b0a7-c4dc52b029ed.jpg"
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
    image: "https://cdn.poehali.dev/projects/63cd2f03-ec83-4499-864f-78c4ae3ab133/files/5034fc31-d0c6-4ab8-8f34-3f2309f31960.jpg"
  }
];