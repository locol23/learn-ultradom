import { h, render } from "ultradom"
import App from './App'

const app = state => render(App(state), document.body)

app("Hello!")