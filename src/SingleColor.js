import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import rgbToHex from './utils'
import styled from "styled-components";

const ColorArticle = styled.article`
  background-color: ${({ rgb }) => `rgb(${rgb})`};
  color: ${({ rgb }) => `rgb(${rgb})`};
  font-weight: bold;
  margin-left: 10px;
  text-
`;


const SingleColor = ({rgb, weight, hexColor, index, variations}) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hexValue = `#${hexColor}`;
    const notify = () => toast.success('Copied to clipboard');
    useEffect (() => {
        const timeOut = setTimeout(() => {
          setAlert(false);
        }, 3000);
        return() => (clearTimeout(timeOut));
    }, [alert])
  return (
    <>
      {/* <article
        // className={`color ${index > (100/variations)/2 && "color-light"}`}
        className="color color-light"
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          //to copy the hexvalue to clipboard
          navigator.clipboard.writeText(hexValue);
          notify();
        }}
      ></article> */}
      <ColorArticle
        rgb={bcg}
        className="color color-light"
        onClick={() => {
          setAlert(true);
          //to copy the hexvalue to clipboard
          navigator.clipboard.writeText(hexValue);
          notify();
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
      </ColorArticle>
    </>
  );
}
export default SingleColor

//component to render toast only when a hexvalue cell is clicked
export const ToastForClipboard = () => {
  return <>{alert && <ToastContainer />}</>;
}
