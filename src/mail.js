import './mail.css';
import { useState } from "react";

export function Mail({lang}) {
    const [siteTopic, setTopic] = useState('');
    const [selectedType, selectType] = useState('none');
    const [otherIdea, setOtherIdea] = useState('');

    return <main id="mail">
        <div className="line">
            <div className="block">
                <h1>{lang === 'Eng' ? 'Staying tuned' : 'На связи'}</h1>
                <p>{lang === 'Eng' ? 'share your ideas and we will get to work on those' : 'поделитесь вашими идеями и мы быстро начнем работу'}</p>
                    <form onSubmit={e => {
                        e.preventDefault();
                        window.open(`mailto:artemhiz@icloud.com?subject=${siteTopic !== '' ? lang === 'Eng' ? 'Site order' : 'Заказ на сайт' : ''}&body=${siteTopic !== '' ? lang === 'Eng' ? `Hello. I had an idea about my "${siteTopic}" site. Site type: ${selectedType}${selectedType === 'other' ? `. Additional info: ${otherIdea}` : ''}` : `Здравствуйте. У меня есть идея по поводу моего сайта – ${siteTopic}. Тип сайта: ${selectedType}${selectedType === 'other' ? `. Дополнительная информация: ${otherIdea}` : ''}` : ''}`);
                    }}>
                        <label>
                            {lang === 'Eng' ? 'The topic of your future site' : 'Тематика вашего будущего сайта'}
                            <input value={siteTopic} onChange={e => setTopic(e.target.value)}/>
                        </label>
                        <label>
                            {lang === 'Eng' ? 'The type of your future site' : 'Тип вашего будущего сайта'}
                            <select name="siteType" value={selectedType} onChange={e => selectType(e.target.value)}>
                                <option value="none">{lang === 'Eng' ?  'Have not decided yet' : 'Пока не решил'}</option>
                                <option value="e-commerce">{lang === 'Eng' ? 'e-Commerce site' : 'Коммерческий сайт'}</option>
                                <option value="landing">{lang === 'Eng' ? 'Landing page' : 'Лэндинг (сайт-визитка)'}</option>
                                <option value="other">{lang === 'Eng' ? 'Other...' : 'Другой...'}</option>
                                <option disabled>{lang === 'Eng' ? 'Check here later for updated skills' : 'Новые скиллы уже на подходе'}</option>
                            </select>
                        </label>
                        {selectedType === 'other' && <textarea placeholder={lang === 'Eng' ? 'Tell more about your idea...' : 'Расскажите подробнее о вашей идее...'} value={otherIdea} onChange={e => setOtherIdea(e.target.value)}/>}
                        <button className="send" type='submit'>{lang === 'Eng' ? 'Send it!' : 'Отправить!'}</button>
                        <p>{lang === 'Eng' ? 'The button transfers you to your mailing service. Make sure you hit the "Send" button there' : 'Кнопка отправляет вас в ваш почтовый клиент. Убедитесь, что вы нажали кнопку "Отправить" в нём'}</p>
                    </form>
                </div>
            </div>
    </main>
}