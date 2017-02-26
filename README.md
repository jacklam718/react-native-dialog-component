## React Native Dialog Component
React Native Dialog Component for iOS & Android.

#### Preview
<img src="https://jacklam718.github.io/react-native-dialog-component/resources/react-native-dialog-component.gif" width="300">
<br>
<br>
<img src="https://jacklam718.github.io/react-native-dialog-component/resources/screenshot-1.png" width="150">
<img src="https://jacklam718.github.io/react-native-dialog-component/resources/screenshot-2.png" width="150">
<img src="https://jacklam718.github.io/react-native-dialog-component/resources/screenshot-3.png" width="150">


## Try With Exponent
[Exponent](https://exp.host/@jacklam718/dialog-component-explorer)

## Installation

```
npm install --save react-native-dialog-component
# OR
yarn add react-native-dialog-component
```

## Exposed Modules

1. DialogManager
2. DialogComponent
3. Dialog
4. DialogContent
5. DialogButton
6. DialogTitle
7. Overlay
8. Animation
9. DefaultAnimation
10. ScaleAnimation
11. SlideAnimation


## Examples
[Example](https://github.com/jacklam718/react-native-dialog-component/blob/master/dialogComponentExample/DialogComponentExample.js)


## Usage With `DialogManager`
```javascript
import DialogManager, { ScaleAnimation, DialogContent } from 'react-native-dialog-component';

// show dialog
DialogManager.show({
  title: 'Dialog',
  titleAlign: 'center',
  animationDuration: 200,
  ScaleAnimation: new ScaleAnimation(),
  children: (
    <DialogContent>
      <View>
        <Text>
          React Native Dialog Component
        </Text>
      </View>
    </DialogContent>
  ),
}, () => {
  console.log('callback - show');
});

// update dialog
DialogManager.update({
  title: 'Dialog Updated',
  titleAlign: 'center',
  animationDuration: 200,
  ScaleAnimation: new ScaleAnimation(),
  children: (
    <DialogContent>
      <View>
        <Text>
          New Content
        </Text>
      </View>
    </DialogContent>
  ),
}, () => {
  console.log('callback - update dialog');
});

// dismiss dialog
DialogManager.dismiss(() => {
  console.log('callback - dismiss');
});

// dismiss all
DialogManager.dismissAll(() => {
  console.log('callback - dismiss all');
});
```

## Usage with `DialogComponent`
```javascript
import { DialogComponent }from 'react-native-dialog-component';

<View style={styles.container}>
  <Button
    text="Show Dialog"
    onPress={() => {
      this.dialogComponent.show();
    }}
  />
  <DialogComponent
    ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
  >
    <View>
      <Text>Hello</Text>
    </View>
  </DialogComponent>
</View>
```

## Usage - With Animation
```javascript
import { DialogComponent, SlideAnimation } from 'react-native-dialog-component';

<View style={styles.container}>
  <Button
    text="Show Dialog"
    onPress={() => {
      this.dialogComponent.show();
    }}
  />
  <DialogComponent
    ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
    dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
  >
    <View>
      <Text>Hello</Text>
    </View>
  </DialogComponent>
</View>
```

## Usage - With Dialog Dialog Title
```javascript
import { DialogComponent, DialogTitle } from 'react-native-dialog-component';

<View style={styles.container}>
  <Button
    text="Show Dialog"
    onPress={() => {
      this.dialogComponent.show();
    }}
  />
  <DialogComponent
    dialogTitle={<DialogTitle title="Dialog Title" />}
    ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
  >
    <View>
      <Text>Hello</Text>
    </View>
  </DialogComponent>
</View>
```

## Usage - Wrape the content use DialogContent
```javascript
import { DialogComponent, DialogTitle } from 'react-native-dialog-component';

<View style={styles.container}>
  <Button
    text="Show Dialog"
    onPress={() => {
      this.dialogComponent.show();
    }}
  />
  <DialogComponent
    dialogTitle={<DialogTitle title="Dialog Title" />}
    ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
  >
    <DialogContent>
      <View>
        <Text>Hello</Text>
      </View>
    </DialogContent>
  </DialogComponent>
</View>
```

## Props

### DialogComponent
| Prop | Type | Default | Note |
|---|---|---|---|
| `dialogTitle` | `React Element` | | You can pass a `DialogTitle` component or pass a `View` for customizing titlebar |
| `width` | `Number` | Your device width | The Width of Dialog, you can use fixed width or use percentage
| `height` | `Number` | 300 | The Width of Dialog, you can use fixed height or use percentage
| `dialogAnimation` |  | `DefaultAnimation` | animation for dialog | |
| `dialogStyle` | `Object` or `Number` | | | |
| `animationDuration` | `Number` | `200` | | |
| `overlayPointerEvents` | `String` | | Available option: `auto`, `none` |
| `overlayBackgroundColor` | `String` | `#000` |
| `overlayOpacity` | `Number` | `0.5` |
| `dismissOnTouchOutside` | `Bool` | `true` | When touch overlay will close dialog, but if `haveOverlay` is false then the `dismissOnTouchOutside` won't work| |
| `dismissOnHardwareBackPress` | `Bool` | `true` | Only for Android | |
| `haveOverlay` | `Bool` | `true` | If false won't show overlay when dialog show | |
| `show` | `Bool` | `false` |  | |
| `onShowed` | `Function` | | You can pass onShowed function as a aallback function, will call the function while dialog showed | |
| `onDismissed` | `Function` | | You can pass onDismissed function as a callback function, will call the function while dialog dismissed | |
| `actions` | `Array` | | Array of `DialogButton` component for example: ```[<DialogButton text="DISMISS", align="center" onPress={this.dismissDialog}/>]``` | |


### DialogContent
| Prop | Type | Default | Note |
|---|---|---|---|
| `contentStyle` | | | Dialog's content container| |


### DialogTitle
| Prop | Type | Default | Note |
|---|---|---|---|
| `title` | `String` | | | |
| `titleStyle` | `Object` or `Number` | | | |
| `titleTextStyle` | `Object` or `Number` | | | |
| `titleAlign` | `String` | `center` | | |
| `haveTitleBar` | `Bool` | `true` | | |


### DialogButton
| Prop | Type | Default | Note |
|---|---|---|---|
| `text` | `String` | | | |
| `align` | `String` | `center` | The position of the button. Available option: `left`, `center`, `right` | |
| `onPress` | `Function` | | | |
| `buttonStyle` | `Object` or `Number` | | | |
| `textStyle` | `Object` or `Number` | | | |
| `textContainerStyle` | `Object` or `Number` | | | |
| `disabled` | `Boolean` | `false` | | |
| `activeOpacity` | `Number` | | | |


## Animation
### Params for (*)Animation

### DefaultAnimation
| Param | Type | Default | Note |
|---|---|---|---|
| `toValue` | Number | 0 | |
| `animationDuration` | Number | 150 | |

### ScaleAnimation
| Param | Type | Default | Note |
|---|---|---|---|
| `toValue` | Number | 0 | |

### SlideAnimation
| Param | Type | Default | Note |
|---|---|---|---|
| `toValue` | Number | 0 | |
| `slideFrom` | String | `bottom` | Available option: `top`, `bottom`, `left`, `right` |


## Welcome Become a Contributor 😃 👍
### I'm welcome anyone become a contributor.

### You must follow style guide.
  * [JavaScript](https://github.com/airbnb/javascript)
  * [React](https://github.com/airbnb/javascript/tree/master/react)
  * Use 2 spaces indentation

### Additional, I recommend you use linter.
  * [Configure Text Editors](https://github.com/kriasoft/react-starter-kit/blob/master/docs/how-to-configure-text-editors.md)
