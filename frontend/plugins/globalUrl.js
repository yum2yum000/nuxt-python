export default (context, inject) => {
    const baseUrl='http://127.0.0.1:8000'
    inject('baseUrl', baseUrl)
}