export function Cards(props) {
  return (
    <>
      <div className={`fa-card ${props.classNameStyle}`}>{props.children}</div>
    </>
  );
}
