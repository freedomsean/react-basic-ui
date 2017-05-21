# React-Basic-UI

This package has some basic layouts to support you to generate a RWD page.
It won't use any external librayies, in order to make your client code use easily.
Now, it will support the following container

  - flex-ui
    - FlexAlignUI: this will be always align by your assignment, if the screen size which will depent on your style spec is too small, it will be fill the parent container.  
    - FlexListUI: it will generate a row list by your assignment, if the screen size is too small, it will be a column list.
  - grid-ui: the following two components needs to use together, in ordert to display the more customize grid sytem
      - GridUI: the container of this grid, it will be divided to 12 columns
      - RowUI: it can be assigned the columns of staring and ending.

## Install:

```sh 
npm install --save react-basic-ui
```

## Use It:

```js
import { FlexAlignUI, FlexListUI, RowUI, GridUI } from 'react-basic-ui'


 // render a list which is align to the right
 const arrItems = [ "about", "signin", "signup", "logout", "remember-me", "happy-ending" ]
<FlexAlignUI align="right">
        <FlexListUI elements={
            arrItems.map( ele => (<div key={ele}>{ele}</div>) )
        } />
</FlexAlignUI>


// render a div which will be layout from column2 to column11
<GridUI>
    <RowUI from={2} to={11}>
        <div style={{ backgroundColor: 'red', width: '100vw' }}></div>
    </RowUI>
</GridUI>
```