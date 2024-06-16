import { projects } from "./projects_list";
import './projects.css';
import { useState } from "react";
import x from './media/x-2.png';

export function Projects({lang}) {
    const [showEdu, setEdu] = useState(false);
    const [selectedFilter, selectFilter] = useState('');

    return <main className="projects">
        <div className="line">
            <div className="block">
                <h1 id="projects-heading">{lang === 'Eng' ? 'My sites' : 'Мои сайты'}</h1>
                <p className="mobile">{lang === 'Eng' ? 'Filters:' : 'Фильтры:'}</p>
                <div className="filters">
                    <button id="x" onClick={() => {selectFilter(''); setEdu(false)}} title={lang === 'Eng' ? 'Cancel filtering' : 'Сбросить фильтры'}><img src={x} alt={lang === 'Eng' ? 'Cancel filtering' : 'Сбросить фильтры'}/></button>
                    {/* <button className={selectedFilter === 'HTML/CSS' ? 'active' : ''} onClick={() => selectFilter(selectedFilter === 'HTML/CSS' ? '' : 'HTML/CSS')}>HTML/CSS</button> */}
                    <button className={selectedFilter === 'JavaScript' ? 'active' : ''} onClick={() => selectFilter(selectedFilter === 'JavaScript' ? '' : 'JavaScript')}>JavaScript</button>
                    <button className={selectedFilter === 'React' ? 'active' : ''} onClick={() => selectFilter(selectedFilter === 'React' ? '' : 'React')}>React</button>
                    <button className={selectedFilter === 'API' ? 'active' : ''} onClick={() => selectFilter(selectedFilter === 'API' ? '' : 'API')}>API</button>
                    <button className={selectedFilter === 'Redux' ? 'active' : ''} onClick={() => selectFilter(selectedFilter === 'Redux' ? '' : 'Redux')}>Redux</button>
                    <button className={selectedFilter === 'Node.js' ? 'active' : ''} onClick={() => selectFilter(selectedFilter === 'Node.js' ? '' : 'Node.js')}>Node.js</button>
                    <button className={selectedFilter === 'Database' ? 'active' : ''} onClick={() => selectFilter(selectedFilter === 'Database' ? '' : 'Database')}>{lang === 'Eng' ? 'Database' : 'База данных'}</button>
                    <button className={selectedFilter === 'Authorization' ? 'active' : ''} onClick={() => selectFilter(selectedFilter === 'Authorization' ? '' : 'Authorization')}>{lang === 'Eng' ? 'Authorization' : 'Авторизация'}</button>
                    <button id='edu' onClick={() => setEdu(!showEdu)} className={showEdu ? 'active' : ''} title={lang === 'Eng' ? 'If you want to see the apps which I did while was studying, select it' : 'Если вы хотите увидеть программы, составленные мной во время обучения, выберите этот пункт'}>{lang === 'Eng' ? 'Educational apps' : 'Учебные приложения'}</button>
                </div>
                <div className="card-list">
                    {projects.filter(project => showEdu ? project : !project.forStudy).filter(project => selectedFilter !== '' ? project.tools.includes(selectedFilter) : project).length === 0 && <div className="no=items">
                        <h2 style={{fontSize: '40px', color: 'rgba(255, 255, 255, 0.5)', textAlign: 'center'}}>{lang === 'Eng' ? 'Yet to come...' : 'Уже на подходе...'}</h2>
                    </div>}
                    {projects.filter(project => showEdu ? project : !project.forStudy).filter(project => selectedFilter !== '' ? project.tools.includes(selectedFilter) : project).map(({id, title, description, tools, link, color, image, forStudy}) => {
                        return <div className="card" key={id} style={{borderColor: color}}>
                            {forStudy && <p className="educational-purposes">{lang === 'Eng' ? 'Educational' : 'Учебный'}</p>}
                            <h2 style={{color: color}}>{lang === 'Eng' ? title.english : title.russian}</h2>
                            <p>{lang === 'Eng' ? description.english : description.russian}</p>
                            <p>{lang === 'Eng' ? 'Used: ' : 'Использованы: '}<span style={{color: color}}>{tools.join(', ')}</span></p>
                            <div className="clickable" onClick={() => window.open(link)}>
                                <img src={image} alt=''/>
                                <button style={{backgroundColor: color, color: color !== '#ffffff' ? 'white' : 'black'}}>{lang === 'Eng' ? 'Go' : 'К сайту'}</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </main>
}