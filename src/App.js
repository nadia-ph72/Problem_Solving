import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import Layout from './components/layout/Layout';
import Table from './components/table/Table';
import RowList from './components/table/RowList';
import NameList from './components/table/NameList';
import NumberPersonnel from './components/table/NumberPersonnel';
import DateOfEmployeement from './components/table/DateOfEmployeement';
import YearsOfService from './components/table/YearsOfService';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}>
         <Route path='/layout' element={<Layout/>}/>

         <Route path='/table' element={<Table/>}>
          <Route path='row' element={<RowList/>}/>
          <Route path='names' element={<NameList/>}/>
          <Route path='number' element={<NumberPersonnel/>}/>
          <Route path='date' element={<DateOfEmployeement/>}/>
          <Route path='history' element={<YearsOfService/>}/>        
         </Route>
         <Route path='/searchbar' element={<SearchBar/>}/>
         </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
