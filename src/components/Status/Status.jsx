import 'bootstrap/dist/css/bootstrap.css';
import * as Icon from 'react-bootstrap-icons';


const Status = () => {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='src/Image/ProfilPhoto.png' alt='profil'/>
                </div>
                <div className='col'>
                    <div className='row d-flex flex-row'>
                        <div className='h2'>Goal</div>
                        <input type='text' placeholder='Define your goal...' />
                    </div>
                    <div className='row'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Icon.CaretLeft size='30px'/>
                            <h2>04 November 2024</h2>
                            <Icon.CaretRight size='30px'/>
                        </div>
                        <div className='d-flex justify-content-center'>Start by adding your first task.</div>
                    </div>
                   
                </div>
                </div>
              
            </div>
            
            
        </div>
        
    )
}

export default Status;