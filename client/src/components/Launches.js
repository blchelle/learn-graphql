import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			launch_date_local
			launch_success
			mission_name
		}
	}
`

const Launches = () => {
	const { loading, error, data } = useQuery(LAUNCHES_QUERY)

	let render
	if (loading) {
		render = <h4>Loading...</h4>
	} else if (error) {
		render = <h4>Error</h4>
	} else {
		render = data.launches.map((launch) => (
			<LaunchItem launch={launch} key={launch.flight_number} />
		))
	}

	return (
		<>
			<h1 className='display-4 my-3'>Launches</h1>
			{render}
		</>
	)
}

export default Launches
