import './MainHeader.css';

function MainHeader()
{
    return(<>
    <hr className='hr'/>    
        
    <h1 className='project'>Новый проект</h1>

    <div className='name_project'>
        <input placeholder='Название проекта' className='pl_name'/>
    </div>

    <div className='idea'>
        <input placeholder='Квантум' className='pl_idea'/>
    </div>

    <div className='baton'>
        <button className='next_baton'> Далее </button>
    </div>
    </>
    );
}

export default MainHeader;