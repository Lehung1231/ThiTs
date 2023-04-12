import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IProducts } from '../../models';
import { getById, update } from '../../api/products';
import { updateForm, updateSchema } from '../../models';

const AdminEdit = () => {

    const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProducts>({} as IProducts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchProductById(id);
      }
    },
  });

  const onSubmit = async (data: updateForm) => {
    try {
        if (id) {
          const updatedData = {...data };
          const response = await update(id, updatedData);
          console.log(response);
          navigate('/');
        }
      } catch (err) {
        console.log(err);
      }
  };

  const fetchProductById = async (id: string) => {
    const { data } = await getById(id);
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const product = await fetchProductById(id);
        setProduct(product);
      }
    };
    fetchData();
  }, [id]);

    return <>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col md:flex-row w-full">
   
  <div className="md:w-2/5 p-4">
      <h2 className="text-xl font-bold mb-4">Cập nhật sản phẩm </h2>
    
  </div>

  <div className="w-full">
      <h1 className="text-lg mt-7">Thông tin sản phẩm</h1>
      <hr className="my-4" />
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <div className="w-full md:w-1/2 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                 Name
              </label>
              <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="text" placeholder="Nhập tên" {...register("name")} />
              <p className='text-red-600 text-[10px]'>
                {errors.name && errors.name.message}
              </p>
          </div>
      </div>
      <div className="price flex">
          <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
              Giá Khuyến Mãi
              </label>
              <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number" placeholder="Nhập giá gốc sản phẩm" {...register("original_price")} />
              <p className='text-red-600 text-[10px]'>
                {errors.original_price && errors.original_price.message}
              </p>
          </div>
      </div>
      <div className="price flex">
          <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
             Mo ta
              </label>
              <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="text" placeholder="Nhập giá gốc sản phẩm" {...register("mota")} />
              <p className='text-red-600 text-[10px]'>
                {errors.mota && errors.mota.message}
              </p>
          </div>
      </div>
      <div className="price flex">
          <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
              thuonghieu
              </label>
              <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="text" placeholder="Nhập giá gốc sản phẩm" {...register("thuonghieu")} />
              <p className='text-red-600 text-[10px]'>
                {errors.thuonghieu && errors.thuonghieu.message}
              </p>
          </div>
      </div>
      <button className="bg-[#00B0D7] hover:bg-blue-400 p-2 rounded-md font-bold text-white">Cập nhật</button>
  </div>
  </div >
  </form>
    </>
  }
  
  export default AdminEdit