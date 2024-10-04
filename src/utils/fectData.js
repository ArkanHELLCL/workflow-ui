function getSuspender(promise){
    let status = "pending";
    let response;

    const suspender = promise.then(
        res => {
            status = "success";
            response = res;
        },
        err => {
            status = "error";
            response = err;
        }
    );

    const read = () => {
        if(status === "pending"){
            throw suspender;
        }else if(status === "error"){
            throw response;
        }else if(status === "success"){
            return response;
        }
    }

    return { read };
}

export function fetchData(url, options){
    const promise = fetch(url, options)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            return {status: "error", message: error.message};
        });

    return getSuspender(promise)
}