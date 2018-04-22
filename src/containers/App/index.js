import React from 'react'
import InfoView from '../InfoView';
import GridView from '../GridView';
import TableView from '../TableView';
import SearchView from '../SearchView';
import Menu from '../../components/Menu';

export default class App extends React.Component{
    /*
    *page: grid, table, info, search
    */
    state = {page: 'grid'}
    render(){
        let content
        switch (this.state.page){
            case 'grid':
            content=<GridView/>
            break;
            case 'info':
            content=<InfoView/>
            break;
            case 'search':
            content=<SearchView/>
            break;
            case 'table':
            content=<TableView/>
            break;
            default:
            content=<GridView/>
            break;
        }
        return(<React.Fragment>
        <Menu />
        {content}
        </React.Fragment>)
    }
}