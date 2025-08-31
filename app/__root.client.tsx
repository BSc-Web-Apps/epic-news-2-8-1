import { type MetaFunction, type HeadersFunction } from 'react-router'
import { type loader } from './root'

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [
		{ title: data ? 'Epic News' : 'Error | Epic News' },
		{ name: 'description', content: `Your own captain's log` },
	]
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
	const headers = {
		'Server-Timing': loaderHeaders.get('Server-Timing') ?? '',
	}
	return headers
}
