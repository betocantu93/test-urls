import Route from '@ember/routing/route';

export default class TeamsRoute extends Route {
	model() {
		return [
			{
				id: '1',
				name: 'México',
				short_name: 'mx'
			},
			{
				id: '2',
				name: 'Brazil',
				short_name: 'br'
			},
			{
				id: '3',
				name: 'Argentina',
				short_name: 'ar'
			},
			{
				id: '4',
				name: 'United States',
				short_name: 'usa'
			}
		]
	}
}
