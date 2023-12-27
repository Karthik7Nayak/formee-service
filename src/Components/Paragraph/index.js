import './paragraph.scss';

function Paragraph({ description, classNameStyle }) {
  return <p className={classNameStyle}>{description}</p>;
}

export default Paragraph;
