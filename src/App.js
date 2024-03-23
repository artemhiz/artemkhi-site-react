import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from './media/logo.jpeg';
import './App.css';
import { Home } from './home';
import { socialMediaList } from './social_media_list';
import { AboutMe } from './about_me';
import { Projects } from './projects';
import { Changes } from './changes';
import { Services } from './services';
import { Contacts } from './contact';
import { Mail } from './mail';
import { WhyMe } from './why_me'
import { Header } from './Header';
import menu from './media/menu.png';

export function App() {
    const [language, setLanguage] = useState(
        localStorage.language ? JSON.parse(localStorage.language) : 'Eng'
    );
    const [activePage, setActivePage] = useState('Home');
    const [contactIsOpened, setOpeningOfContact] = useState(false);
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const pathName = useLocation();

    useEffect(() => {
        localStorage.setItem("language", JSON.stringify(language));
    }, [language])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName])

    return <>
            <header>
            <button className='mobile' onClick={() => setShowMenu(!showMenu)}><img src={menu} alt={language === 'Eng' ? 'Menu' : 'Меню'}/></button>
            <Link to='/' onClick={() => setActivePage('Home')}><img src={logo} alt="logo" height="50px"/></Link>
                <Header language={language} activePage={activePage} setActivePage={setActivePage} setLanguage={setLanguage} setOpeningOfContact={setOpeningOfContact}/>
            </header>
            {showMenu && <div className='mobile menu' onClick={() => setShowMenu(false)}>
                <Header language={language} activePage={activePage} setActivePage={setActivePage} setLanguage={setLanguage} setOpeningOfContact={setOpeningOfContact}/>
            </div>}
            <Routes>
                <Route path='/' element={<Home lang={language} setOpeningOfContact={setOpeningOfContact}/>}/>
                <Route path='/about-me' element={<AboutMe lang={language}/>}/>
                <Route path='/projects' element={<Projects lang={language}/>}/>
                <Route path='/changes' element={<Changes lang={language}/>}/>
                <Route path='/services' element={<Services lang={language}/>}/>
                <Route path='/email' element={<Mail lang={language}/>}/>
                <Route path='/why-me' element={<WhyMe lang={language}/>}/>
            </Routes>
            <footer>
                <nav>
                    <Link to='/projects' onClick={() => setActivePage('Projects')}>{language === 'Eng' ? 'Projects' : 'Проекты'}</Link>
                    <Link to='/services'>{language === 'Eng' ? 'Services' : 'Услуги'}</Link>
                    <Link to='/changes' onClick={() => setActivePage('Changes')}>React</Link>
                </nav>
                <div className='social'>
                    {socialMediaList.map(({title, image, link}) => {
                        return <button key={title} title={language === 'Eng' ? title !== 'Email' ? `Text me in ${title}` : 'Send me an email' : `Напиши мне ${title === 'Email' ? 'на электронную почту' : 'в'} ${title !== 'Instagram' && title !== 'Email' ? title : title === 'Instagram' ? 'Нельзяграме' : ''}`} onClick={() => link !== 'email' ? window.open(link) : navigate('/email')}><img src={image} alt='' style={{filter: `${language === 'Rus' && title === 'Instagram' ? 'blur(10px)' : ''}`}}/></button>
                    })}
                </div>
            </footer>
            <Contacts lang={language} isOpened={contactIsOpened} setOpening={setOpeningOfContact}/>
    </>
}