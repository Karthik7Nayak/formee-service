import './guide.scss';
export function Guide() {
  return (
    <>
      <section className='fa-guide-section'>
        <div className='container'>
          <Paragraph
            classNameStyle='orange-label'
            description='EDUCATION LEVEL'
          />
          <h3>Study with Formee Express</h3>
          <div className='fa-guide-card-container'>{}</div>
        </div>
      </section>
    </>
  );
}
