import './about_me.css';
import me1 from './media/me_2_1.jpeg';
import me2 from './media/me_2_2.jpeg';

export function AboutMe({lang}) {
    return <main className='about'>
        <div className="line">
            <div className="block" id="horizontal">
                <div className="text">
                    <h1>{lang === 'Eng' ? 'About me' : 'Обо мне'}</h1>
                    <p>{lang === 'Eng' ? "I'm Artem, 19 y.o. and I'm a web-developer." : 'Я – Артём. Мне 19 лет, и я – веб-программист.'}</p>
                    <p>{lang === 'Eng' ? "I like working with code for long, especially somewhere at the nearest Starbucks. I have been living for the most of my life in my hometown - Rostov-on-Don, Russia, but now I live in Istanbul, Türkiye. I studied to be a programmer at RKSI (CICR) and now taking courses on new web-development tools." : 'Обожаю подолгу работать с кодом, особенно где-нибудь в ближайшем Старбаксе. Большую часть жизни я прожил в своём родном городе - в Ростове-на-Дону, но уже около года живу в Стамбуле, в Турции. Я учился на программиста в РКСИ и сейчас прохожу курсы по новым инструментам для веб-программирования.'}</p>
                </div>
                <div className="photos">
                    <img src={me1} alt={lang === 'Eng' ? "Artem's photo 1" : 'Личное фото 1'}/>
                    <img src={me2} alt={lang === 'Eng' ? "Artem's photo 2" : 'Личное фото 2'}/>
                </div>
            </div>
        </div>
        <div className='line'>
            <div className='block'>
                <p>{lang === 'Eng' ? "I was always fascinated by techs, and actually I always wanted to make it my work. I always knew what's the difference between different devices, understood technology much and still like sharing my knowledge about it with everyone. I studied greatly at 9 grades, and afterwards I went to the best college of my hometown to be a technic programmer. And I was introduced to HTML there, and in that moment I've realized that I want to study it deeper, because I understood that I like the front-end more, because I like working on things the user sees, working every detail out." : 'Я всегда был увлечен компьютерами и техникой, и, собственно, всегда хотелось связать с этим жизнь и свою работу. Я всегда знал, чем отличаются разные устройства друг от друга, понимал суть многих технологий и по сей день люблю делиться своими знаниями и опытом в этой сфере. Я учился на отлично девять классов школы, после чего поступил в лучший колледж родного города на лучшую в нем профессию - техник программист. Там я и познакомился с HTML, и уже в тот момент я понял, что хочу изучать веб-программирование глубже, поскольку я всегда для себя понимал, что front-end мне больше по душе: нравится работать над тем, что видит пользователь, прорабатывая всё до мелочей.'}</p>
            </div>
            <div className='block'>
                <p>{lang === 'Eng' ? `But life make its own adjustments, and I'm moving with parents, firstly to Moscow, and then to Istanbul where I live until today. Here I like spending my time walking around the city, riding metro and listening to music. And if I find a coffee shop nearby, I'd like to stop and work. But such decisions become into me realizing that I'm sitting at a café for hours forgetting about anything else. This is what I think "to be lit by your work" means.` : 'Но жизнь вносит свои коррективы, и я переезжаю с родителями из Ростова-на-Дону сначала в Москву, а затем в Стамбул, где и проживаю на сегодняшний день. Здесь я обожаю проводить свое свободное время, гуляя по городу, катаясь на метро и слушая музыку. А если найду кофейню неподалеку, то и не прочь сесть и поработать. Правда такие решения обычно оборачиваются тем, что я сижу в кофейне часами, забывая обо всем. Вот, что в моем случае значит "гореть своим делом".'}</p>
            </div>
        </div>
    </main>
}