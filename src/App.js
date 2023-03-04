import Widgets from './components/Widget';
import Banner from './components/Banner';
import Search from './components/Search';
import NewsList from './components/News';


function App() {
  return <div>
    <NewsList />
    <Banner
      img={'https://addons.prestashop.com/1347628-pbig/custom-banner.jpg'}
    />
    <Search />
    <Widgets />
  </div>
}

export default App;
