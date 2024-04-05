import './styles.css'
import { Feature } from './Feature'
import Anywhere from './../../images/icon-access-anywhere.svg'
import Security from './../../images/icon-security.svg'
import Collaboration from './../../images/icon-collaboration.svg'
import AnyFile from './../../images/icon-any-file.svg'

const Features = () => {
  return (
    <div className='features-wrapper'>
      <Feature
        imgSrc={Anywhere}
        title='Access your files, anywhere'
        description='The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
      />
      <Feature
        imgSrc={Security}
        title='Security you can trust'
        description='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
      />
      <Feature
        imgSrc={Collaboration}
        title='Real-time collaboration'
        description='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
      />
      <Feature
        imgSrc={AnyFile}
        title='Store any type of file'
        description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </div>
  )
}

export default Features
