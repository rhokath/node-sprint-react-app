import React, {useState} from "react";

const Item = ({name, description, status})=> {
    const [reveal, setReveal] = useState(false)
    return(
        <div>
            <p className="todo" onClick={()=> setReveal(!reveal)}>{name}</p>
            { reveal && <div className="descript"><p>completed:{status.toString()}</p><p className="itemInfo">description:{description}</p></div>}
        </div>
    )
}

export default Item;