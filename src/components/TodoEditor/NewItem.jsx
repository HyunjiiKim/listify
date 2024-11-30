import { useState } from "react";


const NewItem = ({onCreate,onClose}) => {

    const [formData,setFormData] = useState({
        title: '',
        createdDate: '',
        completedDate: '',
        tag: [],
        description:'',
    });

    const createdDate = new Date().getDate.toLocaleString;
    const completedDate= new Date().getDate.toLocaleString;

    const onSubmit = (e) => {
        console.log('New Item Submitted');
        e.preventDefault();
        onCreate(formData); //pass NewItem data to parent 
        onClose(); 
    };
    
    const onChange = (e) => {
        setFormData(e.target.value);
    }

    return(
        <div className="BackGround">
            <form>
                <div>
                    <input type='checkbox' />
                    <input type='Text'
                    value={formData.description}
                    onChange={onChange}
                    placeholder='Task..' />
                </div>
                <div>
                    <div>
                        <div>Created On</div>
                        <div>{createdDate}</div>
                    </div>
                    <div>
                        <div>Completed On</div>
                        <div>{completedDate}</div>
                    </div>
                    <div>
                        <div>Tag</div>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <textarea
                        value={formData.description}
                        placeholder="Explain the task in detail"
                        onChange={onChange}/>
                    </div>
                </div>
                <div>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onSubmit}>Save</button>
                </div>
            </form>
        </div>
        
    );
}

export default NewItem;