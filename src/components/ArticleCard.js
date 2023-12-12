// ArticleCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  min-height: 35rem;
  max-width: 23rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ArticleCard = ({ image, title, description, githubLink }) => {
  return (
    <CardContainer className="card" style={{ width: '18rem' }}>
      <CardImage src={image} alt={`${title} screenshot`} className="card-img" />
      <CardBody className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={githubLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </CardBody>
    </CardContainer>
  );
}

export default ArticleCard;
