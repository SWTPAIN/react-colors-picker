'use strict';

import 'react-colors-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {Panel as ColorPickerPanel} from 'react-colors-picker';

function onChange(obj) {
  // console.log(obj);
}

ReactDOM.render(
  <div>
    <ColorPickerPanel defaultColor={'#468890'} onChange={onChange} mode="HSL"/>
  </div>,
  document.getElementById('__react-content')
);
