import { educationCards } from '../../Models';
import { Cards } from '../Cards';
import Paragraph from '../Paragraph';
import './education.scss';
export function Education() {
  return (
    <>
      <section className='fa-education-section'>
        <div className='container'>
          <Paragraph
            classNameStyle='orange-label'
            description='EDUCATION LEVEL'
          />
          <h3>Study with Formee Express</h3>
          <div className='fa-card-container'>
            {educationCards.map((data) => (
              <Cards classNameStyle='fa-education-card'>
                <>
                  <img src={data.icon} />
                  <Paragraph
                    classNameStyle='card-title'
                    description={data.title}
                  />
                  <Paragraph
                    classNameStyle='card-desc'
                    description={data.description}
                  />
                  <a href='/'>
                    Find Programs
                    <img src='./images/chevron-right.png' />
                  </a>
                </>
              </Cards>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
