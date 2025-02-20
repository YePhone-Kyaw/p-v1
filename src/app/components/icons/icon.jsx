const { default: IconDownload } = require("./download");
const { default: IconFacebook } = require("./facebook");
const { default: IconGitHub } = require("./github");
const { default: IconInstagram } = require("./instagram");
const { default: IconLinkedin } = require("./linkedin");

import PropTypes from "prop-types";

const Icon = ({name, ...props}) => {
    switch (name) {
        case 'GitHub':
            return <IconGitHub {...props} />;
        case 'LinkedIn':
            return <IconLinkedin {...props} />;
        case 'Facebook':
            return <IconFacebook {...props} />;
        case 'Instagram':
            return <IconInstagram {...props} />;
        case 'Resume':
            return <IconDownload {...props} />;
        default:
            return null;
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon