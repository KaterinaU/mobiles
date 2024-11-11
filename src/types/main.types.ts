export type Phone = {
  id: number; // Уникальный идентификатор телефона
  name: string; // Название модели телефона
  image: string; // Ссылка на изображение телефона
  specs: Spec[]; // Массив характеристик
};

export type Spec = {
  id: number; // Уникальный идентификатор характеристики для маппинга
  name: TableRowName; // Название характеристики
  value: string | number | boolean; // Значение характеристики
};

export type TableRowName =
  | 'manufacturer'
  | 'releaseYear'
  | 'screenSize'
  | 'country'
  | 'memory'
  | 'refreshRate'
  | 'nfc'
  | 'esim'
  | 'inductive'
  | 'price';
