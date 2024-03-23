import './services.css';

export function Services({lang}) {
    return <main id="services">
        <div className="line">
            <div className="block">
                <h2 id='what-i-can'>{lang === 'Eng' ? 'What I can' : 'Что я могу'}</h2>
                <p>{lang === 'Eng' ? 'Your site will be incredible because I use:' : 'Ваш сайт будет неотразим, потому что я использую:'}</p>
                <ul>
                    <li>{lang === 'Eng' ? "HTML - the general language of layout of a site. Exactly with it the whole structure of the site is built." : 'HTML - основной язык для вёрстки сайта. Именно через него строится основная структура элементов на сайте.'}</li>
                    <li>{lang === 'Eng' ? "CSS - cascade sheet of the stilization of the site and its elements. The color, size, position and generally the whole style of an object is set with it down the smallest detail." : 'CSS - таблица для стилизации сайта и элементов на нём. Через него обозначается цвет, размер, расположение и в целом стиль объекта, в мельчайших деталях.'}</li>
                    <li>{lang === 'Eng' ? "JavaScript - programming language, which works more like the program on a computer or a telephone. With help of this language interaction between elements is set, for example «When I press this button, that text changes the color and is written with caps»." : 'JavaScript - язык программирования, больше похожий на то, на чем работают приложения на компьютере или телефоне. С помощью этого языка программирования на сайте настраивается взаимодействие элементов между собой, например «когда я нажму эту кнопку, вон тот текст поменяет цвет, и напишет всё большими буквами».'}</li>
                    <li>{lang === 'Eng' ? "React – is a library of JavaScript, letting set «tighter» interaction between elements on a site and programmed code. For instance, you give the information as the list, and React places it on the site using the pre-programmed template." : 'React – библиотека JavaScript, которая позволяет настроить более "тесное" взаимодействие между элементами на сайте и кодом программы. Например, даете программе информацию в виде списка, а React выставляет эту информацию по заранее созданному шаблону.'}</li>
                    <li>{lang === 'Eng' ? "Semantic layout. It doesn't play an important role on the site, but makes it way more understandable for searching engines and disabled people. It will definitely help you with site's promotion." : 'Семантическая вёрстка. Она не играет большой роли во внешнем виде сайта, зато делает его гораздо понятнее поисковой системе и пользователям с ограниченными возможностями. Это однозначно поможет вам в продвижении сайта в интернете.'}</li>
                    <li>{lang === 'Eng' ? "Making of responsive and adaptive designs. Adaptive design of a site is the ability to be set for the phone's or tablet's screens, and a responsiveness is the ability to make it smootly, gradually changing the size of elements for exact screen or browser's window size." : 'Делаю отзывчивый и адаптивный дизайны. Адаптивный дизайн сайта - это возможность сайта подстраиваться под экраны телефона, а отзывчивый сайт - это возможность делать это плавно, постепенно меняя размер элементов под конкретные размеры экрана и окна браузера.'}</li>
                </ul>
            </div>
            <div className="block" id="list">
                <h2 id='services-heading'>{lang === 'Eng' ? "Services" : 'Услуги'}</h2>
                <div className="big-digits-list">
                    <div className="item">
                        <h3>1.</h3>
                        <div>
                            <h4>{lang === 'Eng' ? "Full construction of a site" : 'Сайт проект под ключ'}</h4>
                            <p>({lang === 'Eng' ? "starting from scratch" : 'полный проект сайта с нуля'})</p>
                        </div>
                    </div>
                    <div className="item">
                        <h3>2.</h3>
                        <div>
                            <h4>{lang === 'Eng' ? "Changing the style of an existing site" : 'Изменение стилистики готового сайта'}</h4>
                            <p>({lang === 'Eng' ? "changing of colors/fonts/style on a site" : 'изменение цветов/шрифтов/стиля на сайте'})</p>
                        </div>
                    </div>
                    <div className="item">
                        <h3>3.</h3>
                        <div>
                            <h4>{lang === 'Eng' ? "Editing an existing site" : 'Редактирование готового сайта'}</h4>
                            <p>({lang === 'Eng' ? "adding new elements, correcting the text, adding the actual information" : 'добавление новых элементов, исправление текста, добавление актуальной информации'})</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
}