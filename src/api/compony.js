import axios from "@/utils/axios";

/**
 * 
 */
export function addCompony(params) {
	return axios({
		url: "/company/add",
		method: "post",
		data: params
	});
}

export function editCompony(params) {
	return axios({
		url: "/company/edit",
		method: "post",
		data: params
	});
}

export function listCompony(params) {
	return axios({
		url: "/company/list",
		method: "get",
		params
	});
}

