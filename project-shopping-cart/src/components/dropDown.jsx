import PropTypes from "prop-types";

function dropDown(links) {
  return (
    <>
      <ul className="dropDownList">{links()}</ul>
    </>
  );
}

dropDown.propTypes = {
  links: PropTypes.function,
};

export default dropDown;
