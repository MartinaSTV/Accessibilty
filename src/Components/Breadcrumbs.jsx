import "../Sass/Breadcrumbs.scss";
import { useNavigate } from "react-router-dom";

const Breadcrumb = ({ breadcrumbs }) => {
  const navigate = useNavigate();

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
              <a
                href=""
                onClick={() => {
                  navigate("/");
                }}
              >
                Hem /
              </a>
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
