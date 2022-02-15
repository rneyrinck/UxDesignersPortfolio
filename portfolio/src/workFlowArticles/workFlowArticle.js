const WorkFlowArticle = (props) => {
  return (
    <article>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <ul>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
        <li>{props.li3}</li>
      </ul>
      <h6>
        <span>{props.softwareIcon}</span>
        {props.sofware}
      </h6>
    </article>
  );
};
export default WorkFlowArticle;
