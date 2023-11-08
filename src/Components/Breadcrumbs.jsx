import "../Sass/Breadcrumbs.scss";

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <article className="breadcrumb">
      <p>Sidor: </p>
      {breadcrumbs.map(({ breadcrumb }, idx) => {
        if (breadcrumb.props.children === "Contact") {
          return (
            <p className="breadcrumb__page" key={idx}>
              Kontakt
            </p>
          );
        }
        if (breadcrumb.props.children === "Home") {
          return (
            <p className="breadcrumb__page" key={idx}>
              Hem
            </p>
          );
        }
        if (breadcrumb.props.children === "About") {
          return (
            <p className="breadcrumb__page" key={idx}>
              Om
            </p>
          );
        }
      })}
    </article>
  );
};
export default Breadcrumb;
