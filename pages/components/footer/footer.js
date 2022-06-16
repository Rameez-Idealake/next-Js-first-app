import Link from 'next/link'
import { useRouter } from "next/router";
import Style from './footer.module.css';
function Footer() {
  const router = useRouter();
  return (
    <>
      <ul className={Style.test}>
        <h4>This is footer</h4>
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
    </>
  )

}

export default Footer