import Link from "next/link"

const CommerceLayout = ({children}) => {
  return (
    <>
      <nav>
        <h3>Commerce Nav</h3>
        <ul>
          <li>
            <Link href="/commerce/categories">Categories</Link>
          </li>
          <li>
            <Link href="/commerce/categories/pc">PC</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  )
}

export default CommerceLayout