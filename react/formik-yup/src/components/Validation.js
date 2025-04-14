import * as yup from "yup"


const Validation = yup.object().shape({
    email      : yup.string().email('Geçerli Bir Email Giriniz').required('zorunlu alan'),
    password   : yup.string().min(5,'Minimum 5 karakter olması gerekiyor').required('zorunlu alan'),
    repassword : yup.string().oneOf([yup.ref('password')],'Şifrelerin eşleşmiyor').required('zorunlu alan'),
})

export default Validation