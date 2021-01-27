import React from 'react'
import { useQuery } from 'react-apollo'
import { Link, useParams } from 'react-router-dom'
import gql from 'graphql-tag'
import classNames from 'classnames'

const LAUNCH_QUERY = gql`
	query LaunchQuery($flight_number: Int!) {
		launch(flight_number: $flight_number) {
			flight_number
			mission_name
			launch_year
			launch_date_local
			launch_success
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	}
`

const Launch = () => {
	const { flight_number } = useParams()

	const { loading, error, data } = useQuery(LAUNCH_QUERY, {
		variables: { flight_number: parseInt(flight_number) },
	})

	let render
	if (loading) {
		render = <h4>Loading...</h4>
	} else if (error) {
		render = <h4>Error</h4>
	} else {
		const {
			mission_name,
			flight_number,
			launch_year,
			launch_success,
			rocket: { rocket_id, rocket_name, rocket_type },
		} = data.launch

		render = (
			<div>
				<h1 className='display-4 my-3'>
					<span className='text-dark'>Mission: </span>
					{mission_name}
				</h1>
				<h4 className='mb-3'>Launch Details</h4>
				<ul className='list-group'>
					<li className='list-group-item'>Flight Number: {flight_number}</li>
					<li className='list-group-item'>Launch Year: {launch_year}</li>
					<li className='list-group-item'>
						Launch Successful:{' '}
						<span
							className={classNames({
								'text-success': launch_success,
								'text-danger': !launch_success,
							})}
						>
							{launch_success ? 'Yes' : 'No'}
						</span>
					</li>
				</ul>
				<h4 className='my-3'>Rocket Details</h4>
				<ul className='list-group mb-3'>
					<li className='list-group-item'>Rocket ID: {rocket_id}</li>
					<li className='list-group-item'>Rocket Name: {rocket_name}</li>
					<li className='list-group-item'>Rocket Type: {rocket_type}</li>
				</ul>
				<Link to='/' className='btn btn-secondary'>
					Back
				</Link>
			</div>
		)
	}

	return <div>{render}</div>
}

export default Launch
