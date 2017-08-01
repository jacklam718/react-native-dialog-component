// react-native-popup-dialog
import {
  Overlay,
  Dialog,
  Animation,
  FadeAnimation,
  ScaleAnimation,
  SlideAnimation,
} from 'react-native-popup-dialog';

import DialogManager from './DialogManager';
import DialogComponent from './DialogComponent';
import DialogTitle from './components/DialogTitle';
import DialogContent from './components/DialogContent';
import DialogButton from './components/DialogButton';

export {
  Overlay,
  DialogButton,
  DialogTitle,
  DialogContent,
  Dialog,
  Animation,
  FadeAnimation,
  ScaleAnimation,
  SlideAnimation,
  DialogComponent,
};

export default new DialogManager();
