import './changes.css';

export function Changes({lang}) {
    return <main className="changes">
        <div className="line">
            <div className="block">
                <h1>{lang === 'Eng' ? 'Changes for the better' : 'Изменения к лучшему'}</h1>
                <p id='main'>{lang === 'Eng' ? "The site hasn't changed visually, but now it's powered by JavaScript's library React. That makes user experience better and with less amount of loadings, and even easens work on a site. For example, this site's structire has been made in less than a week. Meanwhile the same structure on pure HTML would've been ready in whole 2 weeks, though still having less features." : 'Сайт не изменился внешне, но теперь он построен на библиотеке JavaScript React. Это делает опыт использования сайта легче и с меньшим количеством загрузок, а также сильно ускоряет работу над сайтом. Например, структура этого сайта была готова меньше, чем за неделю, с нуля. В то время, как подобная структура сайта на обычном HTML писалась бы около двух недель, при этом не имея такого же богатого функционала.'}</p>
            </div>
        </div>
        <div className="line">
            <div className="block">
                <h2>{lang === 'Eng' ? 'Seamless translate' : 'Быстрый перевод'}</h2>
                <p>{lang === 'Eng' ? "Don't lose the place where you are and switch languages easily. You can try even on this page!" : 'Не теряйте место, на котором остановились и легко переключайте языки. Можете попробовать, даже на этой странице!'}</p>
            </div>
            <div className="block">
                <h2>{lang === 'Eng' ? 'Less loadings' : 'Меньше загрузок'}</h2>
                <p>{lang === 'Eng' ? "Use the site with no limits, but less loadings" : 'Пользуйтесь сайтом без ограничений, но с меньшим количеством загрузок'}</p>
            </div>
            <div className="block">
                <h2>{lang === 'Eng' ? "Working faster" : 'Быстрая работа'}</h2>
                <p>{lang === 'Eng' ? "Many objects can be constructed automatically by running JS-scripts. It makes working on a site even faster." : 'Множество объектов могут конструироваться автоматически за счёт внедрения JS-скриптов. Это делает работу над сайтом ещё быстрее.'}</p>
            </div>
        </div>
    </main>
}