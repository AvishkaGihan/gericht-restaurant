import { images } from "../../constants";
import PropTypes from "prop-types";

const SubHeading = ({ title }) => (
  <div
    style={{
      marginBottom: "1rem",
    }}
  >
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" />
  </div>
);

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeading;
