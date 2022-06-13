import Layout from '../presentation/components/Common/Layout'
import '../styles/globals.css'
import '../styles/contact/Contact.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReviewActionProvider from '../application/contexts/ReviewAction'
import BlogActionProvider from '../application/contexts/BlogAction'
import BookActionProvider from '../application/contexts/BookAction'
import ServiceActionProvider from '../application/contexts/ServiceAction'
import DrawerActionProvider from '../application/contexts/DrawerAction'
import ContactActionProvider from '../application/contexts/ContactAction'
import PrivacyActionProvider from '../application/contexts/PrivacyAction'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {

  return(
    <PrivacyActionProvider>
    <ContactActionProvider>
    <DrawerActionProvider>
    <ServiceActionProvider>
    <BookActionProvider>
    <BlogActionProvider>
    <ReviewActionProvider>
    <Layout>
    <Component {...pageProps} />
    <ToastContainer/>
    </Layout>
    </ReviewActionProvider>
    </BlogActionProvider>
    </BookActionProvider>
    </ServiceActionProvider>
    </DrawerActionProvider>
      </ContactActionProvider>
      </PrivacyActionProvider>
   )
}

export default MyApp
