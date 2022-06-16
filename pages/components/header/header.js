import Link from 'next/link'
import { useRouter } from "next/router";
import Style from './header.module.css';
function Footer() {
  const router = useRouter();
  return (
    <>
      <header className={Style.globalHeader}>
      <h4 >This is Header</h4>
        <ul className={Style.test}>
          
          <li className={router.pathname == "/about" ? "active" : ""}>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li><br />
          <li className={router.pathname == "/contact" ? "active" : ""}>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  )

}

export default Footer