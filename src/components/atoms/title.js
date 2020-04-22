import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageTitle = styled.h1`
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    line-height: 80px;
    color: #865A5A;
    text-align: left;
`;

const Title = styled.h2`
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    line-height: 80px;
    color: #865A5A;
    text-align: center;
`;


/* Will show the right 'tag' within documentation */
PageTitle.displayName = 'Page Title';
Title.displayName = 'Title';

Title.propTypes = {
 content: PropTypes.element.isRequired
};

PageTitleTitle.propTypes = {
 content: PropTypes.element.isRequired
};

export default {Title, PageTitle};
