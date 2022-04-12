import { createStore } from 'vuex'

export default createStore({
	// equi to data
	state: {
		activeProject: {},
		activeFormat: null,
		activeSet: null,
		iframeLoaded: false,
		projects: []
	},
	// commi and track state changes
	mutations: {
		UPDATE_ACTIVE_PROJECT(state, project) {
			state.activeProject = project;
		},
		UPDATE_ACTIVE_FORMAT(state, format) {
			state.activeFormat = format;
		},
		UPDATE_ACTIVE_SET(state, set) {
			state.activeSet = set;
		},
		SET_PROJECTS(state, projects) {
			state.projects = projects.children;
		},
		IFRAME_LOADED(state, status) {
			state.iframeLoaded = status;
		},
	},
	// equi to methods which update data
	// updates state
	// ! call mutations which update state directly
	actions: {
		fetchFromDB(ctx, target) {
			return fetch(`http://localhost:4000/${target}`)
				.then(res => res.json())
				.then(data => {
					ctx.commit("SET_PROJECTS", data);
				})
				.catch(err => console.error(err));
		},
		fetchFromStage(context) {
			console.log('fetch stage');
		}
	},
	// equi to computed which access data
	// access state
	getters: {
		projects(state) {
			return state.projects;
		}
	},
	modules: {
	}
})