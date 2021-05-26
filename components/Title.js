/* export default function Title(props) {
  return <h1>{props.children}</h1>;
} */
//Lo mismo pero destructurando el objeto props:
export default function Title({ children }) {
  return <h1>{children}</h1>;
}
