import Layout from '../hoc/Layout/Layout';
import classes from "./App.module.css"
function App() {
  return (
    <Layout>
      <div className={classes.Main}>
        hello world
      </div>
    </Layout>
  );
}

export default App;
