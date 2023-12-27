import Paragraph from '../Paragraph';
import './banner.scss';

function Banner() {
  return (
    <>
      <section
        className='f-banner-section'
        // style={{ backgroundImage: 'url(/images/banner-bg.png)' }}
      >
        <div className='container'>
          <Paragraph
            classNameStyle='banner-title'
            description='
            OUR STUDENT SERVICES'
          />
          <h3>
            Find your dream International Education Provider and apply directly
            through Formee Express
          </h3>
          <Paragraph
            classNameStyle='banner-desc'
            description='
            Our mission is to inform, educate and connect students through our
            platform. We understand the need to keep in touch with the
            fast-paced, ever-changing environment; Formee Express wants to help
            students to be more informed, more connected, and more engaged'
          />
          <img src='./images/student-b.png' className='student' />
        </div>
        <img src='./images/map.png' className='map' />
      </section>
    </>
  );
}

export default Banner;
