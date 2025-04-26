import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="fixed w-full h-max bottom-0 flex items-center justify-between p-4 bg-gray-800 text-white">
      <nav className="w-full flex justify-end space-x-4">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/apod" className="hover:text-gray-400">APOD</Link>
      </nav>
    </footer>
  )
}
