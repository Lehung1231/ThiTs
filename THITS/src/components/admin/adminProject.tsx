import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { getAll, deleteProduct } from "../../api/products"
import { IProducts } from "../../models"

const AdminProject = () => {
  const [products, setProducts] = useState<IProducts[]>([])

  const fetchProducts = async () => {
    const { data } = await getAll()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa sản phẩm này không?");
    if (confirmDelete) {
      await deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
    }
  }

  return <div>
    <h2 className="font-bold mt-10 ml-10 text-lg">Điện thoại</h2>
    <Link to="/add" className="inline-block w-1/12  -mt-10 float-right mr-28 ">
  Theem
</Link>
    <div className="flex mt-10 ml-10 ">
     
    </div>

    
    
    <div className="relative overflow-x-auto ml-10 mr-10 ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3 w-80">
                   #
                </th>
                <th scope="col" className="px-6 py-3 w-80">
                Tên sản phẩm
                </th>
                <th scope="col" className="px-6 py-3 w-80">
                Giá sell
                </th>
                <th scope="col" className="px-6 py-3 w-80">
                Mo ta
                </th>
                <th scope="col" className="px-6 py-3 w-80">
                Thuong hieu
                </th>
                <th scope="col" className="px-6 py-3 w-80">
                Thao tác
                </th>
            </tr>
        </thead>
        <tbody>
        {products.map(product => <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.id}
                </th>
                <td className="px-6 py-4">
                {product.name}
                </td>
                <td className="px-6 py-4">
                {product.original_price}
                </td>
                <td className="px-6 py-4">
                {product.mota}
                </td>
                <td className="px-6 py-4">
                {product.thuonghieu}
                </td>
                <td className="px-6 py-4 text-center "> 
                <button onClick={() => handleDelete(product.id)} className="mr-6">
       Xoa
  </button>
                <Link to={`/edit/${product.id}`}>                                          
                   Sua
                   </Link>
                </td>
            </tr>
            </>
                )}
        </tbody>
    </table>
</div>
  </div>
}

export default AdminProject