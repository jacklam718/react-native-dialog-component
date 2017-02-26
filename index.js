// react-native-popup-dialog
import {
  Overlay,
  Dialog,
  Animation,
  DefaultAnimation,
  ScaleAnimation,
  SlideAnimation,
} from 'react-native-popup-dialog';

import DialogManager from './src/DialogManager';
import DialogComponent from './src/DialogComponent';
import DialogTitle from './src/components/DialogTitle';
import DialogContent from './src/components/DialogContent';
import DialogButton from './src/components/DialogButton';

export {
  Overlay,
  DialogButton,
  DialogTitle,
  DialogContent,
  Dialog,
  Animation,
  DefaultAnimation,
  ScaleAnimation,
  SlideAnimation,
  DialogComponent,
};

export default new DialogManager();
