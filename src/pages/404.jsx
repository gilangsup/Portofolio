import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Link to={"/"}>
        <button className="bg-satkom-blue-light inline-flex justify-center rounded-md border border-transparen px-4 py-2 text-sm font-medium hover:bg-satkom-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          Kembali ke Halaman utama
        </button>
      </Link>
  )
}

export default ErrorPage