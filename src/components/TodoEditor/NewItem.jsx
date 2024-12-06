import { useState } from "react";



const NewItem = ({onCreate,onClose}) => {

    function changeDateFormat(Frenchdate){
        if(!(Frenchdate instanceof Date)){
            Frenchdate = new Date(Frenchdate);
        }
        let year = Frenchdate.getFullYear();
        let month = String(Frenchdate.getMonth()+1).padStart(2,'0');
        let date = String(Frenchdate.getDate()).padStart(2,'0');
        return `${year}-${month}-${date}`;
    }    

    const [formData,setFormData] = useState({
        title: '',
        createdDate: changeDateFormat(new Date().getTime()),
        completedDate: changeDateFormat(new Date()),
        tag: [],
        description:'',
    });

    const onSubmit = (e) => {
        console.log('New Item Submitted');
        e.preventDefault();
        onCreate(formData); //pass NewItem data to parent 
        onClose(); 
    };
    
    const onChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <div className="BackGround">
            <form>
                <div>
                    <input type='checkbox' />
                    <input type='Text'
                    name='title'
                    value={formData.title}
                    onChange={onChange}
                    placeholder='Task..' />
                </div>
                <div>
                    <div>
                        <div>Created On</div>
                        <input name='createdDate' type='date' value={formData.createdDate} onChange={onChange}/>
                    </div>
                    <div>
                        <div>Completed On</div>
                        <input name='completedDate' type='date' value={formData.completedDate} onChange={onChange}/>
                    </div>
                    <div>
                        <div>Tag</div>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <textarea
                        name='description'
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