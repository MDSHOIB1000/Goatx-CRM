import React from 'react'
import InvoiceForm from './InvoiceForm'
import InvoiceTable from './InvoiceTable'

const InvoiceInformation = () => {
  return (
    <div className="border rounded-lg shadow p-4 m-4">
      <h2 className="bg-black p-2 text-white font-semibold text-lg">
      Invoice
      </h2>
      <InvoiceForm />
      <InvoiceTable />
    </div>
  )
}

export default InvoiceInformation