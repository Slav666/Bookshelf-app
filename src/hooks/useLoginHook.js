import axios from "axios";
import { useMutation } from "@tanstack/react-query";
export default function useLoginUser(options) {
    return useMutation((userLoginValues) => {
        return axios.post("/api/login/", userLoginValues).then((res) => {
            const data = res.data;
            return data;
        });
    }, options);
}
