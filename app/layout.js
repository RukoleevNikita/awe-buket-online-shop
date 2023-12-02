
import './globals.scss';
import {Footer, Header, MainWrapper} from '@/components';
// import { StoreProvider } from '@/redux/StoreProvider';


export const metadata = {
  title: 'Awe Buket',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        {/*<StoreProvider>*/}
        <MainWrapper>
          {children}
        </MainWrapper>
        {/*</StoreProvider>*/}
        <Footer/>
      </body>
    </html>
  );
}