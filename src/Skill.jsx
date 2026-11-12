import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from './styles/Button';
import skillsData from './components/DATA/data.json';

const Skill = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Skills & Capabilities</h2>
      <div className="container grid grid-three-column">
        {skillsData.map((curElem) => {
          const { id, title, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={title} />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to="/contact">
                  <Button className="btn">Get in Touch</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  .card {
    border: 0.1rem solid rgba(170, 170, 170, 0.3);
    border-radius: 1rem;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(98, 84, 243, 0.15);
    }

    .card-data {
      padding: 0 2rem 2.5rem 2rem;
      text-align: center;
    }
    h3 {
      margin: 2rem 0 1rem 0;
      font-weight: 600;
      font-size: 2.2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
    .btn {
      margin: 2rem auto 0 auto;
      background-color: transparent;
      border: 0.1rem solid rgb(98, 84, 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98, 84, 243);
      font-size: 1.4rem;
      transition: all 0.2s ease;
      &:hover {
        background-color: rgb(98, 84, 243);
        color: #fff;
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    padding-top: 1.5rem;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.08);
    }
    img {
      max-width: 90%;
      height: 18rem;
      object-fit: contain;
      transition: all 0.3s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Skill;
