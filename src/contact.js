import { socialMediaList } from "./social_media_list";
import './contact.css';
import x from './media/x.png';
import { useNavigate } from 'react-router-dom';

export function Contacts({lang, isOpened, setOpening}) {
    const navigate = useNavigate();

    return <div className={`contacts${!isOpened ? " closed" : " overlay"}`} onClick={() => setOpening(false)}>
        <div className="window" onClick={() => setOpening(true)}>
            <div className="heading">
                <h2>{lang === 'Eng' ? 'Contacts' : 'Контакты'}</h2>
                <img src={x} alt="X" className="x" onClick={() => setOpening(false)}/>
            </div>
            <div className="flex-list">
                {socialMediaList.map(({title, image, description, link}, index) => {
                    return <div key={index} title={lang === 'Eng' ? `Text me ${title !== 'Email' ? 'in' : 'via'} ${title}` : `Напиши мне ${title !== 'Email' ? 'в' : 'на'} ${title === 'Instagram' ? 'Нельзяграме' : title !== 'Email' ? title : 'электронную почту'}`} className="flex-item" onClick={() => title !== 'Email' ? window.open(link) : navigate('/email')}>
                        <img src={image} alt={title} style={{filter: lang === 'Rus' && title === 'Instagram' ? 'blur(40px)' : 'none'}}/>
                        <p>{description}</p>
                    </div>
                })}
            </div>
            <img src={x} alt="X" className="x mobile" onClick={() => setOpening(false)}/>
        </div>
    </div>
}