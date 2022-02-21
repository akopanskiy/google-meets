# Google-meets

Імітація зображення дзвінка через google-meets.

## Основні команди

`npm start` - запустити проект в режимі розробки

## Деплой

Подивитися, що з того вийшло - клікайте
[сюди](https://akopanskiy.github.io/google-meets/)

## Навігація по коду

> Папка [components](./src/components/) -всі компонети, які рендеряться в
> проекті
>
> > [InterlocutorsWindow](./src//components/InterlocutorsWindow/) - рендерить
> > вікно, в якому відображаються всі запрошені учасники дзвінка

> > [FunctionPanel](./src//components/FunctionPanel/)-нижня панель, яка
> > відображає годинник і функціональні кнопки

> > > [Clock](./src/components/Clock/) - відображення годинника в лівому
> > > нижньому куті на функціональній панелі

> > > [ControlButtons](./src/components/ControlButtons/) - кнопки у центральній
> > > частині функціональної панелі

> > > [FunctionButtons](./src/components/FunctionButtons/) - кнопки у правій
> > > частині функціональної панелі

> > [Dropdown](./src/components/Dropdown/) - випадаюче вікно при натисненні
> > кнопки "Показати всіх"

> > > [Search](./src/components/Search/) - поле для пошуку користувачів в
> > > компоненті Dropdown

> > > [Users](./src/components/Users/) - список учасників дзвінка
> > > (відображається в компоненті Dropdown)

> > [UserWindow](./src/components/UserWindow/) - вікно з відображенням окремого
> > учасника дзвінка

> > [Toolbar](./src/components/Toolbar/) - випадаюче меню при натисненні кнопки
> > "Інші опції"

> Папка [context](./src/context/) - створення контексту для передачі state

> Папка [images](./src/images/) - дефолтні зображення

> Папка [services](./src/services/) - API для отримання зображень
