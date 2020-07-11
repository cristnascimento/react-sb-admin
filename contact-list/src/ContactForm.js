import React, {useState} from "react";
import { Link } from 'react-router-dom';

function ContactForm (props) {

    const [state, setState] = useState(props.contact);

    function handleOnChange (e) {
      let value;
      const name = e.target.name;
  
      if (e.target.type === "checkbox")
        value = e.target.checked ? "on" : "";
      else
        value = e.target.value;

      setState(previous => {
        return {...previous, [name]: value};
      });
    }

    function handleSubmit (e) {
      e.preventDefault();
      props.submit(state);
    }

    return (
    <div class="container col-md-6" >
    <br/>
    <h2>Add/Edit/View Contact</h2>
    <br/>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputFirstName">First name</label>
          <input type="text" class="form-control" id="inputFirstName" name="firstName" value={state.firstName} onChange={handleOnChange} readOnly={props.readonly}/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputLastName">Last Name</label>
          <input type="text" class="form-control" id="inputLastName" name="lastName" value={state.lastName} onChange={handleOnChange} readOnly={props.readonly}/>
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail">E-mail</label>
        <input type="email" class="form-control" id="inputEmail" name="email" value={state.email} onChange={handleOnChange} readOnly={props.readonly}/>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="inputPhone">Phone</label>
          <input type="text" class="form-control" id="inputPhone" name="phone" value={state.phone} onChange={handleOnChange} readOnly={props.readonly} />
        </div>
        <div class="form-group col-md-4">
          <label for="inputPhoneCategory">Category</label>
          <select id="inputPhoneCategory" name="phoneCategory" class="form-control" value={state.phoneCategory} onChange={handleOnChange} disabled={props.disabled}>
            <option>Mobile</option>
            <option>Home</option>
            <option>Work</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" name="address" value={state.address} onChange={handleOnChange}  readOnly={props.readonly} placeholder="1234 Main St"/>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" name="city" value={state.city} onChange={handleOnChange} readOnly={props.readonly}/>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" name="state" value={state.state} onChange={handleOnChange} disabled={props.disabled} class="form-control">
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" name="zip" value={state.zip} onChange={handleOnChange} readOnly={props.readonly}/>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputCloseFriend" name="closeFriend" checked={state.closeFriend == "on" ? true : false} onChange={handleOnChange}  disabled={props.disabled}/>
          <label class="form-check-label" for="inputCloseFriend">
            Close Friend
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>{props.btn}</button>
      <Link to="/contact/list" className="btn btn-warning ml-1">Cancel</Link>

    </form>
</div>
    );
}

export default ContactForm;