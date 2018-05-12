import { h } from 'ultradom'

const App = state =>
  h("div", {}, [
    h("h1", {}, state),
    h("input", {
      autofocus: true,
      type: "text",
      value: state,
      oninput: e => app(e.target.value)
    })
  ])

export default App