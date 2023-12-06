import axios from "axios";

    export function uploadCoverPic(body: FormData) {
        // if (teamId) {
        return axios
          .put(`https://rest.dev.sporfy.com/ads/blocks/upload/ADB2023071882227XXNp`, body, {
            // 'headers': { 'token': User.shared.token }
            // 'headers': { 'authcode': 'EGETacRhNM2e40QeHv3f85a47uU8Cxl9' }
          })
          .then((res) => {
           return(res);
          })
          .catch((err) => {
            if (err && err.response) {
             return( null);
            } else {
             return( null);
            }
          });

        }

