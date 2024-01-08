import { Head } from '@inertiajs/react';
import React from 'react'
import { AdminDashboardLayout } from './Layouts/AdminDashboardLayout';

const AdminDashboard = ({auth}) => {
  // console.log(auth);
  return (
    
    <AdminDashboardLayout
    
    user={auth.user}
            header={
                <h2 className="font-semibold text-right text-xl text-gray-800 leading-tight">
                    صفحه اصلی 
                </h2>
            }>
              
    <Head title="صفحه اصلی" />
    </AdminDashboardLayout>
  )
}

export default AdminDashboard