import { createStore } from 'vuex'

export default createStore({
	// equi to data
	state: {
		activeProject: {},
		activeFormat: null,
		activeSet: null,
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
			state.projects = projects;
		},
	},
	// equi to methods which update data
	// updates state
	// ! call mutations which update state directly
	actions: {
		fetchFromDB(context, target) {
			return fetch(`http://localhost:4000/${target}`)
				.then(res => res.json())
				.then(data => {
					context.commit("SET_PROJECTS", data);
				})
				.catch(err => console.error(err));
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