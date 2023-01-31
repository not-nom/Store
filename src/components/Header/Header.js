import {Link} from 'react-router-dom'
const data = [
    {
      title: 'Latest Competitions',
      link: '/competitions'
    },
    {
      title: 'Entry Lists',
      link: '/lists'
    },
    {
      title: 'Live Draws',
      link: '/draws'
    },
    {
      title: 'Winners',
      link: '/winners'
    },
    {
      title: 'Gift Cards',
      link: '/cards'
    },
    {
      title: 'How it Works',
      link: '/how-it-works'
    }
  ]
export default function Header() {
    return(
        <header>
            <Link to='/'>LogoAuto</Link>
            <nav>
                {data.map((dB,i) => {
                    return <Link key={i} to={dB.link}>{dB.title}</Link>
                }
                )}
            </nav>
            <div>
                <Link to='/logIn'>Log In</Link>
                <Link to='/register'>Register</Link>
            </div>
        </header>
    )
}