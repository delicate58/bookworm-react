import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import validator  from 'validator'
import InlineError from '../messages/InlineError'

import PropTypes  from 'prop-types'

class LoginForm extends React.Component {

    state = {
        data:{
            email:'',
            password:''
        },
        loading :false,
        errors:{}
    }

    onChange= (e) =>{
         this.setState({data:{...this.state.data,[e.target.name]:e.target.value}})
    }

    onSubmit= () => {
        const errors= this.validate(this.state.data);
        this.setState({errors})
        if(Object.keys(errors).length===0){
           this.props.submit(this.state.data)
        }
    }

    validate=(data)=>{
        const errors={};

          if(!validator.isEmail(data.email)) errors.email="Invalid Email";

          if(!data.password) errors.password='Password Can\'t be balnk';

         return errors;


    }

    render() {
        const {data,errors} = this.state;
        return (
             <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={data.email} placeholder='example@example.com' onChange={this.onChange} />
                     {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input  name="password" type="password" value={data.password} placeholder='password'  onChange={this.onChange}/>
                       {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
               
                <Button type='submit' primary>Submit</Button>
            </Form>
        )
    }
}

LoginForm.propTypes={
 submit: PropTypes.func.isRequired
}

export default LoginForm