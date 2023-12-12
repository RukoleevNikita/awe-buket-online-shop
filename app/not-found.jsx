import { Container, MainWrapper } from '@/components';
import sadDuck from '@/public/images/sad-duck.png';
import Image from 'next/image';


export default function NotFound() {
  return (
    <Container>
      <MainWrapper>
        <h1 style={{textAlign: 'center'}}>Страница не найдена...</h1>
        <Image 
          src={sadDuck} alt="" width={512} height={512}  
          style={{margin: '30px auto', display: 'block'}}
        />
      </MainWrapper>
    </Container>
  );
}
