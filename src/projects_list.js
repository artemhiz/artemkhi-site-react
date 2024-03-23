import istex from './media/screenshots/istex.png';
import nb from './media/screenshots/nbsite.png';
import cookit from './media/screenshots/cookit.png';
import weather from './media/screenshots/weather.png';
import christmas from './media/screenshots/christmas.png';
import todos from './media/screenshots/todolist.png';
import furniture from './media/screenshots/furniture.png';

export const projects = [
    {
        id: 'istex',
        title: {
            english: 'İstanbul Experience',
            russian: 'İstanbul Experience'
        },
        description: {
            english: 'Site project for a guide in Istanbul. It shows helpful information about Istanbul, interesting places and services provided by this guide and their partners.',
            russian: 'Сайт-проект для гида в Стамбуле. Отображает полезную информацию о Стамбуле, интересных местах и услугах, предоставляемых услугах гида и его партнеров.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'http://experience.istanbul/',
        color: '#B8621B',
        image: istex,
        forStudy: false
    },
    {
        id: 'boju',
        title: {
            english: 'Natalia Borisova the lawyer',
            russian: 'Юрист Наталья Борисовна'
        },
        description: {
            english: 'Site project for Natalia Borisova (@borisova_jurist). It shows the information about services to make and some other legal information.',
            russian: 'Сайт-проект для Натальи Борисовой (@borisova_jurist). Отображает инфомацию об оказываемых услугах и дополнительную юридическую информацию.'
        },
        tools: ['HTML/CSS'],
        link: 'http://borisova-jurist.ru/',
        color: '#5584AC',
        image: nb,
        forStudy: false
    },
    {
        id: 'cookit',
        title: {
            english: 'CooKit – a site with a shopping list',
            russian: 'CooKit – сайт со списком покупок'
        },
        description: {
            english: "Site's demo with the ability to search for dishes by their name or an ingredient. Click on ingredients' list, and everything will be added to your shopping list in the screen's corner.",
            russian: 'Демо-версия сайта с возможностью поиска блюда по названию или ингредиенту. Нажмите на список ингредиентов, и он добавится в ваш список покупок в углу экрана.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://mulberry-faint-governor.glitch.me/',
        color: '#daa520',
        image: cookit,
        forStudy: true
    },
    {
        id: 'weather',
        title: {
            english: 'Weather',
            russian: 'Погода'
        },
        description: {
            english: "Site's demo with searching for weather of world's any city.",
            russian: 'Демо-версия сайта с поиском погоды в любом городе мира. Главное – написать его название по-английски.'
        },
        tools: ['HTML/CSS', 'JavaScript', 'API'],
        link: 'https://reflective-guttural-cilantro.glitch.me/',
        color: '#b996ff',
        image: weather,
        forStudy: true
    },
    {
        id: 'christmas',
        title: {
            english: 'Timer for Christmas',
            russian: 'Таймер до Рождества'
        },
        description: {
            english: "Site with a timer until December 25th of this year, with precious music by Mariah Carey in the background.",
            russian: 'Сайт с таймером до 25-го Декабря текущего года под прекрасное музыкальное сопровождение Мэрайи Кэри.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://holistic-young-innovation.glitch.me/',
        color: '#dc143c',
        image: christmas,
        forStudy: true
    },
    {
        id: 'todos',
        title: {
            english: 'Todo list',
            russian: 'Сайт-список дел'
        },
        description: {
            english: "Site's demo of a todo list where you can mark todos as completed or delete them. When there are no todos you'll see a manual of the site.",
            russian: 'Демо-версия сайта-списка дел, где можно добавлять дела, отмечать их, как завершенные, и удалять. Когда на экране нет дел, автоматически показывается руководство приложения.'
        },
        tools: ['HTML/CSS', 'JavaScript'],
        link: 'https://curious-sand-gander.glitch.me/',
        color: '#d2691e',
        image: todos,
        forStudy: true
    },
    {
        id: 'furniture',
        title: {
            english: 'Furniture Gallery',
            russian: 'Галерея мебели'
        },
        description: {
            english: "Site's demo of the photos' gallery. Hover the cursor to see the full picture with additional info.",
            russian: 'Демо-версия галереи из фото. Наведите курсор, чтобы увидеть развернутое изображение с дополнительной информацией'
        },
        tools: ['HTML/CSS'],
        link: 'https://western-detailed-turn.glitch.me/',
        color: '#ffffff',
        image: furniture,
        forStudy: true
    },
]