import me from './media/me.png';
import mail from './media/mail_site.jpeg'
import './home.css';
import representative from './media/globe.jpeg';
import whyMe from './media/why_me.jpeg';
import whyMeEng from './media/why_me_en.png';
import { useNavigate } from 'react-router-dom';

export function Home({lang, setOpeningOfContact}) {
    const navigate = useNavigate();
    
    return <main>
        <div className="line" style={{minHeight: '45vh'}}>
            <div className="block" id="eye-catcher">
                {lang === 'Eng' && <h2 style={{zIndex: '300'}}>You have never seen your site</h2>}
                <div className='slogan'>
                    <h3>{lang === 'Eng' ? 'THAT' : 'ТАК'}</h3>
                    <div>
                        <h4>{lang === 'Eng' ? 'cool' : 'стильно'}</h4>
                        <h4>{lang === 'Eng' ? 'stylish' : 'круто'}</h4>
                    </div>
                </div>
                {lang === 'Rus' && <h2 style={{zIndex: '300'}}>ваш сайт еще не выглядел</h2>}
                <div id="button-placer">
                    <button id="order" onClick={() => setOpeningOfContact(true)}>{lang === 'Eng' ? 'To order' : 'Для заказа'}</button>
                    <button id="email" onClick={() => navigate('/email')}><img src={mail} alt={lang === 'Eng' ? 'Send an email' : 'Отправить письмо на эл. почту'}/></button>
                </div>
            </div>
            <div className='block' id='digits'>
                <img id='me' src={me} alt=""/>
            </div>
        </div>
        <div className='line'>
            <div className='block' id='changes' onClick={() => navigate('/changes')}>
                <h4>{lang === 'Eng' ? 'Changes for the better' : 'Изменения к лучшему'}</h4><button>{lang === 'Eng' ? 'Learn more' : 'Узнать больше'}</button>
            </div>
        </div>
        <div className='line'>
            <div className="block" id='representative' onClick={() => {navigate('/about-me')}}>
                <p>{lang === 'Eng' ? "I'm your representative in the internet" : 'Я ваш представитель в интернете'}</p>
                <h6>"</h6>
                <img src={representative} alt={lang === 'Eng' ? "Earth globe" : "Земной шар"}/>
            </div>
            <div className='block' id='make-site' onClick={() => navigate('/services')}>
                <h4>{lang === 'Eng' ? 'How to make your site cooler?' : 'Как украсить ваш сайт?'}</h4>
                <div id='line'/>
                <p>{lang === 'Eng' ? "Site's full construction" : 'Дизайн "под ключ"'}</p>
            </div>
            <div className='block' id='why-me' onClick={() => navigate('/why-me')}>
                <img src={lang === 'Eng' ? whyMeEng : whyMe} alt={lang === 'Eng' ? 'Why you should choose me' : 'Почему нужно выбрать меня'}/>
            </div>
        </div>
    </main>
}