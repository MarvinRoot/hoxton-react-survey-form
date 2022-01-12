function Radio(props) {

    function handleOnChange(e) {
        if(props.name === 'consistency') {
          let newData = {...props.formData, consistency : e.target.value}  
          props.setFormData(newData)
        }else if(props.name === 'colour') {
            let newData = {...props.formData, colour : e.target.value}  
            props.setFormData(newData)
        }else if(props.name === 'logo') {
            let newData = {...props.formData, logo : e.target.value}  
            props.setFormData(newData)
        }
    }

    return (
        <ul>
            <li>
                <input id={`${props.name} + '1'`}
                type="radio" 
                name={props.name} 
                value="1" 
                onChange={(e) => {handleOnChange(e)}}/>
                <label htmlFor={`${props.name} + '1'`}>1</label>
            </li>
            <li>
                <input id={`${props.name} + '2'`} 
                type="radio" 
                name={props.name} 
                value="2"
                onChange={(e) => {handleOnChange(e)}}/>
                <label htmlFor={`${props.name} + '2'`}>2</label>
            </li>
            <li>
                <input id={`${props.name} + '3'`} 
                type="radio" 
                name={props.name} 
                value="3" 
                onChange={(e) => {handleOnChange(e)}}/>
                <label htmlFor={`${props.name} + '3'`}>3</label>
            </li>
            <li>
                <input id={`${props.name} + '4'`} 
                type="radio" 
                name={props.name} 
                value="4" 
                onChange={(e) => {handleOnChange(e)}}/>
                <label htmlFor={`${props.name} + '4'`}>4</label>
            </li>
        </ul>
    )
}

export default Radio