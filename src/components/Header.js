import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className = 'container'>
                <div className = 'logo'>
                    <img src="https://img.icons8.com/ios/50/000000/tripadvisor.png"/>
                    <p>Wellyadvisor</p>
                </div>
                <div className = 'svg-container'>
                    <>
                    <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                     </svg>
                    </>
                    <>
                    <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                    </svg>
                    </>
                    <button>Login</button>
                    <Link to = '/signup'>
                      <button>Sign up</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header