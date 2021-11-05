import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub'

function Footer() {
  return (
    <div className='footer-container'>
      <a href='https://github.com/Bri-Gonzalez/SERVER'>
        <GitHubIcon style={{ fontSize: 30 }} />
      </a>
    </div>
  )
}

export default Footer
