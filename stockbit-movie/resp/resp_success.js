

module.exports = {

    success: (data) => {
        return {
            data: data,
            status_code: 200,
            status: "success",
            error: ""
        }
    },

    successPagination: (data) => {
        return {
            data: data.data,
            status_code: 200,
            status: "success",
            pagination: data.pagination,
            error: ""
        }
    },

}