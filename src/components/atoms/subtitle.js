import PropTypes from 'prop-types';
import styled from 'styled-components';

const alignments = {
    left:{
        textAlign: 'left',
    },
    center: {
        textAlign: 'center',
    },
    right: {
        textAlign: 'right',
    }
}

const SubTitle = styled.h3`
    font-family: Poppins;
    font-weight: 600;
    font-size: 80px;
    line-height: 80px;
    color: #865A5A;
    text-align: ${props => alignments[props.alignment].textAlign};
`;

SubTitle.displayName = 'Subtitle';

SubTitle.defaultProps = {
    alignment: 'center',
};

SubTitle.propTypes = {
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    content: PropTypes.element.isRequired
};

export default SubTitle;
