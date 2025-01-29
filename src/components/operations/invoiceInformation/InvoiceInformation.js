import React from 'react'
import InvoiceForm from './InvoiceForm'
import InvoiceTable from './InvoiceTable'

const InvoiceInformation = () => {
  return (
    <div className="border p-4 shadow-sm m-2 mt-2 rounded">
      <h2 className="bg-black p-2 text-white font-semibold text-lg">
      Invoice
      </h2>
      <InvoiceForm />
      <InvoiceTable />
    </div>
  )
}

export default InvoiceInformation