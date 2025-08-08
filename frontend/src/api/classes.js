export function getClass(params) {
    return request.get('/api/v1/classes/', { params })
}