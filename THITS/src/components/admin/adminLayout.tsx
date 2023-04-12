import {Outlet} from 'react-router-dom'

const AdminLayout = () => {
    return <>
        {/* Header */}
        <header className="bg-red-500">
             ADMIN
        </header>
        {/* Content */}
        <Outlet/>
        {/* Footer */}
     
    </>
}

export default AdminLayout