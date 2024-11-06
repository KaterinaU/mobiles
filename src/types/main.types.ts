export type Phone = {
    id: number;                  // Уникальный идентификатор телефона
    model: string;               // Модель телефона
    manufacturer: string;        // Производитель
    releaseYear: number;         // Год выпуска
    price: number;               // Стоимость в валюте (например, USD)
    countryOfOrigin: string;     // Страна-производитель
    specs: Spec[];
};



export type Spec = {
    name: string;                        // Название характеристики (например, "Диагональ экрана")
    value: string | number | boolean;    // Значение характеристики (например, "6.1 дюймов")
};