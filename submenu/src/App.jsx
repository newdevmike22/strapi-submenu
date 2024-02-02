import { useGlobalContext } from "./Context";

const App = () => {
  const {isSidebarOpen} = useGlobalContext();
  console.log(isSidebarOpen);
  
  return (
    <h1>Strapi Submenu</h1>
  )
};

export default App;