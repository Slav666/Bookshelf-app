import axios from "axios";
import {
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";

interface ApiResponse {
  data: {
    // Define the structure of your data here
    id: number;
    username: string;
    password: string;
    books: string[];
    finishedBooks: string[];
  };
}

export default function useFinishedBookFromUser(): UseMutationResult<
  ApiResponse,
  unknown,
  object,
  unknown
> {
  return useMutation<ApiResponse, unknown, object, unknown>(
    (userWithFinishedBook: object) => {
      return axios
        .put(`/api/finished-book-by-user/`, userWithFinishedBook)
        .then((res) => {
          const data = res.data as ApiResponse["data"]; // Assuming data is of type ApiResponse['data']
          console.log("data return from !!!", data);
          return data;
        });
    }
  );
}

// export default function useFinishedBookFromUser() {
//   return useMutation((userWithFinishedBook: object) => {
//     return axios
//       .put(`/api/finished-book-by-user/`, userWithFinishedBook)
//       .then((res: object) => {
//         const data = res.data;
//         console.log("data return from !!!", data);
//         return data;
//       });
//   });
// }
