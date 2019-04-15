import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';
import DetailView from './detailview';
import ReactDOM, { createPortal} from 'react-dom';
import { element } from 'prop-types';
import { fullScreen, centeredContent } from '../css';


const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-container');

interface Props {}



export default class Modal extends React.Component<Props, {}> {
  
  render() {
    return createPortal(
      this.props.children,
      modalRoot!
    );
  }


}