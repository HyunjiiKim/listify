import 'bootstrap/dist/css/bootstrap.css';

const Form = () => {
    return(
        <form>
            <div>
                <div>
                <div className='h4'>What type of account would you like to create?</div>
                    <div className='d-flex'>
                        <div>
                            <input type='radio'/>
                            <label>Personal</label>
                        </div>
                        <div>
                            <input type='radio'/>
                            <label>Business</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='d-flex flex-column'>
                        <label>First Name</label>
                        <input type='text' />
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Last Name</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='d-flex flex-column'>
                        <label>E-mail</label>
                        <input type='text' />
                </div>
                <div className='d-flex flex-column'>
                        <label>Confirm E-mail</label>
                        <input type='text' />
                </div> <div className='d-flex flex-column'>
                        <label>Password</label>
                        <input type='password' />
                </div>
                <div className='d-flex flex-column'>
                        <label>Confirm Password</label>
                        <input type='password' />
                </div>
                <div className='d-flex flex-column'>
                    <label>How did you hear about us?</label>
                    <select>
                        <option>Choose one of them</option>
                        <option>Social media</option>
                        <option>Search engine</option>
                        <option>Email newsletter</option>
                        <option value="">Word of mouth</option>
                        <option value="">Referral by friend or family</option>
                    </select>
                </div>
            </div>
            <input type='submit' value='Send'/>
        </form>
    )
}

export default Form;