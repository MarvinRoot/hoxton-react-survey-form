import Checkbox from "./Checkbox"
import Radio from "./Radio";

function Form(props) {
    const answersSet = {
        colour: "It's yellow!",
        sound: "It squeaks!",
        logo: "It has a logo!",
        size: "Its big!"
      };
      
      const answersSetTwo = {
        swimming: "Swimming",
        bathing: "Bathing",
        chatting: "Chatting",
        noTime: "I don't like to spend time with it"
      };
    return (
        <form className="form" onSubmit = {(e)=> e.preventDefault()}>
            <h2>Tell us what you think about your rubber duck!</h2>

            <div className="form__group">
                <h3>What would you say that are the best features of your rubber duck?</h3>
                <Checkbox formData={props.formData} 
                setFormData={props.setFormData} 
                name={'bestFeatures'} 
                list={answersSet}/>
            </div>

            <div className="form__group">
                <h3>What would you say that are the worst bits of your rubber duck?</h3>
                <Checkbox formData={props.formData} 
                setFormData={props.setFormData}
                name={'worstFeatures'} 
                list={answersSet}/>
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck consistency?</h3>
                <Radio formData={props.formData} 
                setFormData={props.setFormData}
                name={'consistency'} />
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <Radio formData={props.formData} 
                setFormData={props.setFormData}
                name={'colour'}/>
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck logo?</h3>
                <Radio formData={props.formData} 
                setFormData={props.setFormData}
                name={'logo'}/>
            </div>

            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <Checkbox formData={props.formData} 
                setFormData={props.setFormData}
                name={'timeSpent'}
                list={answersSetTwo}/>
            </div>

            <label
                >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols={30}
                rows={10}
                ></textarea></label
            ><label
                >Put your name here (if you feel like it):<input
                type="text"
                name="username"
                value="" /></label
            ><label
                >Leave us your email pretty please??<input
                type="email"
                name="email"
                value="" /></label
            ><input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )
}

export default Form