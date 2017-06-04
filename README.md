# React-Basic-UI

This package has some basic layouts to support you to generate a RWD page.
It won't use any external librayies, in order to make your client code use easily.
Now, it will support the following container

  - flex-ui (it still be developing)
    - FlexAlignUI: this will be always align by your assignment, if the screen size which will depent on your style spec is too small, it will be fill the parent container.  
    - FlexListUI: it will generate a row list by your assignment, if the screen size is too small, it will be a column list.
  - grid-ui: the following two components needs to use together, in ordert to display the more customize grid sytem
      - GridUI: the container of this grid, it will be divided to 12 columns
      - RowUI: it can be assigned the columns of staring and ending
  - motion-ui
      - MotionUI: it will watch both Mouse and Touch events and execute the sample event handlers. In addition to the changed distincts, it also offers the events "motionUp", "motionDown", "motionLeft", "motionRight". It doesn't need to check the x-axis and y-axis in your client codes
      - RowUI: it can be assigned the columns of staring and ending.

## Install:

```sh 
npm install --save react-basic-ui
```

## Demo:

Demo site: https://freedomsean.github.io/react-basic-ui/demo/static/
Demo source code: https://github.com/freedomsean/react-basic-ui/blob/master/demo/containers/App.jsx

## Use It:

```js
import { FlexAlignUI, FlexListUI, RowUI, GridUI, MotionUI } from 'react-basic-ui'

 // render a list which is align to the right
 const arrItems = [ "about", "signin", "signup", "logout", "remember-me", "happy-ending" ]
<FlexAlignUI align="right">
        <FlexListUI elements={
            arrItems.map( ele => (<div key={ele}>{ele}</div>) )
        } />
</FlexAlignUI>


// render a div which will be layout from column2 to column11
<GridUI>
    <RowUI xsFrom={1} to={12} from={3} to={6}>
        <div style={{ backgroundColor: 'red', width: '100vw' }}>
            {"123"}
        </div>
    </RowUI>
</GridUI>

// render a container which will show the change distinct
<MotionUI 
    motionDistinctX={100} motionDistinctY={100}  
    motionChange={ ( x, y ) => console.log(x, y) } 
    motionUp={ () => console.log('up') } 
    motionDown={ () => console.log('Down') } 
    motionLeft={ () => console.log('Left') } 
    motionRight={ () => console.log('Right') }>

    { ...some contents }

</MotionUI>

```