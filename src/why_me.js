import './why_me.css';

export function WhyMe({lang}) {
    return <main id="why">
        <div className="line">
            <div className="block" id="main">
                <h2>{lang === 'Eng' ? "Why me?" : 'Почему я?'}</h2>
                <p>{lang === 'Eng' ? "Every person invests their soul in ther work, so do I: actually lit by my work, making the sites. Every element on a site made by me must look perfectly, so I'll do everything what is needed for a site to look gorgeous in its any part. Also I'm a very talkative person, and I'm eager to discuss about your site highlighting the smallest details, and to make it amazing for you firstly. Never be afraid of telling what you don't like in a project. I'm always agree with you and follow your wishes." : 'Каждый человек вкладывает в свое дело свою душу, точно так же поступаю и я: по-настоящему горя своим делом, делаю сайты. Каждый элемент на сайте, который делаю я, должен выглядеть идеально, поэтому я сделаю все, что нужно, чтобы сайт выглядел превосходно в любой его части. Также я очень общительный человек, и я с радостью готов обсудить ваш сайт в самых мельчайших деталях и сделать его потрясающим в первую очередь для вас. Никогда не бойтесь рассказывать о том, что вас не устраивает в проекте. Я всегда иду на уступки и следую Вашим желаниям.'}</p>
            </div>
            <div className="block" id='warranties'>
                <h2>{lang === 'Eng' ? "Warranties" : 'Гарантии'}</h2>
                <div className="big-digits-list">
                    <div className="item">
                        <h3>1</h3>
                        <p>{lang === 'Eng' ? "month to correct a done project" : 'месяц на внесение правок в готовый проект'}</p>
                    </div>
                    <div className="item">
                        <h3>2</h3>
                        <p>{lang === 'Eng' ? "weeks to correct site's structure" : 'недели на внесение правок в структуру сайта'}</p>
                    </div>
                    <div className="item">
                        <h3>3</h3>
                        <p>{lang === 'Eng' ? "weeks for editing site's and its pages' style" : 'недели на изменения стиля сайта и содержания его страниц'}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="line">
            <div className="block" id='principles'>
                <div className="big-digits-horizontal">
                    <div className="item">
                        <h3>1</h3>
                        <h4>{lang === 'Eng' ? "Punctuality" : 'Пунктуальность'}</h4>
                        <p>{lang === 'Eng' ? "Work is completed before the deadline" : 'Работа всегда выполнена в рамках дедлайна'}</p>
                    </div>
                    <div className="item">
                        <h3>2</h3>
                        <h4>{lang === 'Eng' ? "Quick Response" : 'Быстрое реагирование'}</h4>
                        <p>{lang === 'Eng' ? "Always staying tuned for corrections and discussing the process of a project" : 'На связи с клиентом для внесения правок и обсуждения процесса проекта'}</p>
                    </div>
                    <div className='item'>
                        <h3>3</h3>
                        <h4>{lang === 'Eng' ? "Quality" : 'Качество'}</h4>
                        <p>{lang === 'Eng' ? "Constant training lets me complete the tasks faster and more quality" : 'Постоянное повышение квалификации позволяет быстрее и качественнее выполнять поставленные задачи'}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
}