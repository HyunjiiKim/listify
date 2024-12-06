import { useState } from "react";

const Tag = () => {
    
    const [tag,setTag] = useState({
        id: '',
        text: '',
    });

    const handleDelete = (index) => {
        setTag(tag.filter((_,i) => i !== index));
    }

    const onTagUpdate = (index, newTag) => {
        const updatedTag = [...tag];
        updatedTag.splice(index, 1, newTag);
        setTag(updatedTag);
    }

    const handleAddition = (tag) =>{
        setTag((prevTag) => {
            return[...prevTag, tag];
        });
    };
    
    return(
        <>
        </>
    );
}