import './Footer.css'

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__container'>
      <div className='footer__left'>
        <h3 className='footer__sectionHeading'>ABOUT PROJECT:</h3>
        <p>Trip Store is a project created to show my skills to potential Employees or Clients, hope you like it. </p>
      </div>

      <div className='footer__center'>
        <h3 className='footer__sectionHeading'>ABOUT ME:</h3>
        <p>I'm Karol Cislowski and I'm fullstack developer with focus on front end using React js library. </p>
      </div>

      <div className='footer__right'>
        <h3 className='footer__sectionHeading'>Links:</h3>
        <p>
          <li><a href='https://cislowski-karol.com/'>Portfolio</a></li>
          <li><a href='https://github.com/KarolCislowski'>GitHub</a></li>
        </p>
      </div>
    </div>
  </footer>
)