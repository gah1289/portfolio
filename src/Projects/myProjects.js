import postharvestImg from '../Images/PostharvestHome.png';
import hispotImg from '../Images/HI-Spot.png';
import portfolioImg from '../Images/Portfolio.png';
import joblyImg from '../Images/Jobly.png';

const myProjects = {
	postharvestApp : {
		tab         : '1',
		title       : 'Postharvest App',
		description : 'Full stack app designed for Windham Packaging, LLC.',
		goals       : `Allow users to look up information on various fruit and vegetable commodities. Admins can edit commodity information as well as view and download shelf-life studies associated with each commodity.`,
		frontEnd    : [
			'React',
			'Bootstrap',
			'Deployed with Surge'
		],
		backEnd     : [
			'Node',
			'Express',
			'PostgreSQL',
			'S3',
			'Deployed with Heroku'
		],
		apis        : [
			'I built my own API and obtained all data using research I gathered over my previous career as a Postharvest Specialist'
		],

		links       : [
			{ name: 'Website', link: 'https://postharvest.surge.sh/' },
			{ name: 'GitHub Frontend', link: 'https://github.com/gah1289/postharvest-app-frontend' },
			{ name: 'GitHub Back-end', link: 'https://github.com/gah1289/postharvest-app-backend ' }
		],
		imgSrc      : postharvestImg
	},
	hiSpotApp      : {
		tab         : '2',
		title       : 'Hi-Spot App',
		description : 'Full stack app for Hi Spot Condominiums on Lake Winnipesaukee, NH. App deployed with Heroku',
		goals       : `Allow residents to access information about the condo association and pay monthly invoices online.`,
		frontEnd    : [
			'Python',
			'WTForms',
			'JavaScript'
		],
		backEnd     : [
			'Python',
			'Flask',
			'PostgreSQL'
		],
		apis        : [
			'Stripe',
			'OpenWeatherMap'
		],
		links       : [
			{ name: 'Website', link: 'https://hispot-website.herokuapp.com/' },
			{ name: 'GitHub', link: 'https://github.com/gah1289/hi-spot-website' }
		],
		imgSrc      : hispotImg
	},
	jobly          : {
		tab         : '3',
		title       : 'Jobly App',
		description : 'A job searching API. ',
		goals       : `Allow users to register, login, apply to jobs, and view and filter company profiles and jobs. 
        `,
		frontEnd    : [
			'React',
			'Deployed with Surge'
		],
		backEnd     : [
			'Node',
			'Express',
			'PostgreSQL',
			'Deployed with Heroku'
		],
		apis        : [
			'I built my own API'
		],
		links       : [
			{ name: 'Website', link: 'https://jobly-ghm.surge.sh/' },
			{ name: 'GitHub Front-end', link: 'https://github.com/gah1289/react-jobly-frontend' },
			{ name: 'GitHub Back-end', link: 'https://github.com/gah1289/react-jobly-backend' }
		],
		imgSrc      : joblyImg
	},
	portfolio      : {
		tab         : '4',
		title       : 'Portfolio',
		description : '',
		goals       : `To tell you a little bit about myself and show off my projects`,
		frontEnd    : [
			'React',
			'Bootstrap',
			'JavaScript',
			'FontAwesome'
		],
		backEnd     : [],
		apis        : [],
		links       : [
			{ name: 'GitHub', link: 'https://github.com/gah1289/portfolio' }
		],
		imgSrc      : portfolioImg
	}
};

export default myProjects;
