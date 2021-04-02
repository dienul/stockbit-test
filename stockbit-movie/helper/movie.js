module.exports = {
    createParam: async (parameter) => {
        try {
            let urlString = ""
            const keysParameter = Object.keys(parameter).sort();
            const lastLength = keysParameter.length - 1

            for (let i = 0; i < keysParameter.length; i++) {
                let eachKey = keysParameter[i]

                switch (i) {
                    case lastLength:
                        urlString += `${eachKey}=${parameter[eachKey]}`
                        break;
                    default:
                        urlString += `${eachKey}=${parameter[eachKey]}&`
                        break;
                }
            }
           
            return urlString
        } catch (error) {
           throw new Error(error)
        }
    },
}