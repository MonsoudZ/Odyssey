import api from './api-confiq'


export const getOneComment = async ( comment_id) => {
    try {
        const res = await api.get(`/comments/${comment_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const createComment = async (post_id, commentData) => {
  try {
        commentData.post_id = post_id
        const res = await api.post(`/comments`, { comment: commentData })
        return res.data
    } catch (error) {
        throw error
    }
}

export const putComment = async (comment_id, commentData) => {
    try {
        const res = await api.put(`/comments/${comment_id}`, { comment: commentData })
        return res.data
    } catch (error) {
        throw error
    }
}

export const deleteComment = async ( comment_id) => {
    try {
        const res = await api.delete(`/comments/${comment_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}