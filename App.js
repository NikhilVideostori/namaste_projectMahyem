{/* <div id='parent'>
<div id='child1'>
   <h1>i am child1 h1</h1>
   <h2>i am child1 h2</h2>
</div>
<div id='child2'>
   <h1> i am child2 h1</h1>
   <h2> i am child2 h2</h2>
</div>
</div> */}

// creating nested html elements using React.createElement

const heading=React.createElement('div',{id:"parent"},[
   React.createElement('div',{id:"child1"},[
      React.createElement('h1',{},'i am child1 h1'),React.createElement('h2',{},'i am child1 h2')
   ]),
   React.createElement('div',{id:"child2"},[
      React.createElement('h1',{},"i am child2 h1"),React.createElement('h2',{},"i am child2 h2")
   ])
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

// const heading=React.createElement('h1',{id:"heading"},"HELLO WORLD FROM RCT")
//    const root=ReactDOM.createRoot(document.getElementById('root'))
//    root.render(heading)