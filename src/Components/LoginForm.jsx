import styles from '../Styles/LoginPage.module.scss'
function LoginForm() {

    return (
        <div className={style.container} style={marB&&{marginBottom:marB}}>
            <div className={style.title}>{title}</div>
            {type?(
            <textarea 
              className={style.TextInput} 
              style={size&&{height:size}} 
              placeholder={placeholder}
              value={value}
              onChange={onChange} required/>
            ):(
            <input 
              name={name}
              className={style.input} 
              placeholder={placeholder} 
              type='text'
              value={value}
              onChange={onChange} required/>)}
        </div>
      )
  }

  export default LoginForm