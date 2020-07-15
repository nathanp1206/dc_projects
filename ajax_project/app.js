const ajax = (url, callback) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200){
            callback(request.response)
        }
    }
    request.open("GET", url)
    request.send()
}

