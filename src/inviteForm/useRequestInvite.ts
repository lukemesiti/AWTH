import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { RequestInvite, ErrorResponse } from "./types";

const sendRequest = async (request: RequestInvite) => {
  return await axios.post<RequestInvite>(
    "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
    request
  );
};

export function useRequestInvite() {
  return useMutation<AxiosResponse, AxiosError<ErrorResponse>, RequestInvite>(
    sendRequest
  );
}
