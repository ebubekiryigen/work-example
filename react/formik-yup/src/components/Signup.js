import { Field, Form, Formik, useFormik } from "formik";
import Validation from "./Validation";


const Signup = () =>{
    const {handleChange,handleSubmit,handleBlur,values, errors,touched} = useFormik({
        initialValues:{
          email:"",
          password:"",
          repassword:"",
        },
        onSubmit: (values)=>{
          alert(JSON.stringify(values,null,2))
        },
        validationSchema : Validation
      })
    return(
        <div>
            {/*       <Formik
            initialValues={{
                firstName:"",
                lastName:"",
                email:"",
                gender:"male",
                hobies:[],
                language:"en"
            }}
            onSubmit={async (values)=>{
                alert(JSON.stringify(values,null,2))
            }}
            > */}
                
                {/* <Form>  <label htmlFor="firstName" >First Name</label>
                <br/>
                <Field name="firstName" placeholder="ebubekir" />
                <br />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <br/>
                <Field name="lastName" placeholder="yigen"  />
                <br />
                <br />
                <label htmlFor="email">Email</label>
                <br/>
                <Field name="email" placeholder="ebushww@gmail.com" type="email" />
                <br/>
                <br/>
                <button type="submit" >Gönder</button>  </Form>*/}
                {/* {({handleSubmit,handleChange,values})=>( */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName" >Password</label>
                    <input name="password" type="password" onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password && <div className="danger">{errors.password}</div>}
                    <br />
                    <br />
                    <label htmlFor="lastName" >Re Password</label>
                    <input name="repassword" type="password" onChange={handleChange} onBlur={handleBlur}  />
                    {errors.repassword && touched.repassword && <div className="danger">{errors.repassword}</div>}
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="ebushww@gmail.com" type="email" onBlur={handleBlur} onChange={handleChange} />
                    {errors.email && touched.email && <div className="danger">{errors.email}</div>}
                    <br/>
                    <br/>
                    {/*        <label htmlFor="gender">Gender</label>
                    <br/>
                    <span>Male</span>
                    <input checked={values.gender === 'male'} name="gender" type="radio" value="male" onChange={handleChange} />
                    <span>Female</span>
                    <input checked={values.gender === 'female'} name="gender" type="radio" value="female" onChange={handleChange} />
                    <br/>
                    <br/>
                    <div>
                        Violin
                        <input type="checkbox" name="hobies" value="violin" onChange={handleChange} />
                    </div>
                    <div>
                        Pc
                        <input type="checkbox" name="hobies" value="pc" onChange={handleChange} />
                    </div>
                    <div>
                        React
                        <input type="checkbox" name="hobies" value="react" onChange={handleChange} />
                    </div>
                    <br/>
                    <br/>
                    <div>
                    Dil Seçiniz<br/>
                    <select name="language" value={values.language} onChange={handleChange}>
                        <option value="tr" checked={values.language === "tr"}>TR</option>
                        <option value="en" checked={values.language === "en"}>EN</option>
                        <option value="fr" checked={values.language === "fr"}>FR</option>
                    </select>
                    </div> */}
                    <br/>
                    <br/>
                    <button type="submit" >Gönder</button> 
                    <br/>
                    <br/>
                    <code>{JSON.stringify(values)}</code>
                    </form>
                {/* )} */}
            {/* </Formik> */}
        </div>
    )
}

export default Signup