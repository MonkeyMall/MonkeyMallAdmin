import axios from "@/utils/axios";

/**
 * 登录
 */
export function addCompony(params) {
	return axios({
		url: "/company/add",
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

