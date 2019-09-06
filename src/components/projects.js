import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Item from "./projectitem"

const Projects = () => {
    const [project, setProject] = useState(null)
    useEffect(()=>{
        axios.get("http://localhost:4444/products/")
            .then(res => {
                setProject(res.data)
                console.log("res in get", res.data)})
            .catch(err => console.log("err in get", err))
    }, [])
    return (
        <div className="list">
            <h2>Project List</h2>
            {project && project.map(item => {
                return <Item  key={item.id} name={item.name} description={item.description} status={item.completed} />
                console.log("console.log from map",item)}
            
            )}
        </div>
    )
}
export default Projects;