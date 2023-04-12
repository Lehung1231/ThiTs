import * as Yup from 'yup'

export interface IProducts {
    id: string,
    name: string,
    original_price: number,
    mota: string,
    thuonghieu : string

}
export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.string().required("Trường dữ liệu bắt buộc"),
    mota: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
    thuonghieu : Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
  
  });
  export type updateForm = Yup.InferType<typeof updateSchema>

  export const addSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    mota: Yup.string().required("Trường dữ liệu bắt buộc"),
    thuonghieu: Yup.string().required("Trường dữ liệu bắt buộc"),
 
})

export type addForm = Yup.InferType<typeof addSchema>

export const signupSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
})

export type SignupForm = Yup.InferType<typeof signupSchema>
export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})

export type SigninForm = Yup.InferType<typeof signinSchema>