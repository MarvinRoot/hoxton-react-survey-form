function Checkbox(props) {

    function handleOnChange() {
        let selectedItems = [
            ...document.querySelectorAll(`input[name="${props.name}"]`),
          ]
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
      
          props.setFormData({ ...props.formData, [props.name]: selectedItems });
    }
    return (
        <ul>
            {Object.keys(props.list).map((item) => {
                <li key={item}>
                    <label>
                        <input onChange={handleOnChange}
                        name={props.name} type="checkbox" value={item} />
                    {`${props.list[item]}`}</label>
                </li>
            })}
        </ul>
    )
}

export default Checkbox