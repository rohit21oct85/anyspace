import React, { Component, Suspense } from 'react';
//import AdminSidebar from "../Components/AdminSidebar"
const AdminSidebar = React.lazy(()=>import("../Components/AdminSidebar"));

export default function (ComposedComponent) {
  class AdminLayout extends Component {

    render() {
      return (
        <React.Fragment>
          {window.scrollTo(0, 0)}
          <Suspense fallback={""}>
           <AdminSidebar />
           <main className="main-conainer admin">
            <ComposedComponent {...this.props} />
          </main>
          </Suspense>



        </React.Fragment>
      )

    }

  }
  return AdminLayout;
}
