import React from 'react';
import useForm from './useForm';
import validaDados from './validaDados';
import  './Form.css';

const FormSignup = ({ submitForm }) => {
    const  {handleChange, values, handleSubmit, errors } = useForm(submitForm, validaDados);


    return (
        <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
              Registre-se agora mesmo!
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Nome de usuário</label>
              <input
                className='form-input'
                type='text'
                name='username'
                placeholder='Insira seu nome'
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Insira seu email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Senha</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Insira uma senha'
                value={values.password}
                onChange={handleChange}
              />
              {errors.senha && <p>{errors.senha}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Confirme sua Senha</label>
              <input
                className='form-input'
                type='password'
                name='password2'
                placeholder='Repita sua senha'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.senha2 && <p>{errors.senha2}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
              Cadastrar
            </button>
            <span className='form-input-login'>
              Ja tem uma conta? Login 
            </span>
          </form>
        </div>
      );
};

export default FormSignup;
