import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

import './styles.css'

function getTileType(type) {
	switch(type) {
		case 0:
			return 'freeSpace'
		case 1:
			return 'fakeTree'
		case 2:
			return 'fakeMountains'
		case 4:
			return 'grass'
		case 5:
			return 'tree'
		case 6:
			return 'mountains'
		case 7:
			return 'water'
		case 8:
			return 'treasure'
		case 9:
			return 'function'
		default:
	}
}
	
function MapTile(props) {
	return <div 				
		className={`tile ${getTileType(props.tile)}`}
		style={{ 
			height: SPRITE_SIZE,
			width: SPRITE_SIZE,
		}}
	>
		{props.tile}

	</div>
}

function MapRow(props) {
	return <div className="row">
		{
			props.tiles.map((tile, key) => <MapTile tile={tile} key={key}/>)
		}
	</div>
}

function Map(props) {
	return (
		<div
			style={{
				position: 'relative',
				top: '0px',
				left: '0px',
				width: '800px',
				height: '400px',
				backgroundColor: 'black',
				border: '4px solid purple',
				margin: '10px auto'
			}}
		>
			{
				props.tiles.map((row, key) => <MapRow tiles={row} key={key} />)
			}
		</div>
	)
}

function mapStateToProps(state) {
	return {
		tiles: state.map.tiles
	}
}

export default connect(mapStateToProps)(Map)