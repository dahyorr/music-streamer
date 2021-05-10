import {connect} from 'react-redux'
import TrackListItem from './TrackListItem'
const SearchList = ({searchResult}) =>{
    const renderResult = searchResult.map(track => <TrackListItem track={track} key={track.id}/> )

    console.log(searchResult)
    return(
        <div className="SearchList container">
            {renderResult}
        </div>
    )
}

const mapStatetoProps = state =>{
    return{
        searchResult: state.search.result.tracks
    }
}
export default connect(mapStatetoProps)(SearchList)