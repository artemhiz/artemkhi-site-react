import globe from './media/lang.png';
import { NavLink } from 'react-router-dom';

export function Header({language, activePage, setActivePage, setLanguage, setOpeningOfContact}) {
    return <>
        <nav>
            <NavLink to='/' className={'mobile'}>{language === 'Eng' ? 'Home' : 'Главная'}</NavLink>
            <NavLink to='/about-me' onClick={() => setActivePage('About')}>{language === 'Eng' ? 'About me' : 'Обо мне'}</NavLink>
            <NavLink to='/projects' onClick={() => setActivePage('Projects')}>{language === 'Eng' ? 'Projects' : 'Проекты'}</NavLink>
            <NavLink to='/services' onClick={() => setActivePage('Services')}>{language === 'Eng' ? 'Services' : 'Услуги'}</NavLink>
        </nav>
        <div className='language-selector'>
            <p><img src={globe} alt="Language" height="20px"/><button onClick={() => setLanguage('Eng')}>EN</button> | <button onClick={() => setLanguage('Rus')}>RU</button></p>
        </div>
        <button className='contact' onClick={() => setOpeningOfContact(true)}>{language === 'Eng' ? 'Contacts' : 'Контакты'}</button>
    </>
}