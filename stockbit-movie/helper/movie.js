module.exports = {
    addApiParam : async(data = {}) => {
        try {
            const parameter = {
                app_key: PARTNER_KEY.toString(),
                timestamp: moment.now().toString(),
                sign_method: 'sha256',
                access_token: MARKETPLACE_ACCESS_TOKEN
            };

            for( key in data){
                parameter[`${key}`] = data[key]
            }

            // console.log('parameter >>', parameter);

            return parameter

        } catch (error) {
            console.log('addApiParam >>', error)
            return {
                status : 0,
                message : error.message
            }
        }
    },

    createParam: async (parameter) => {
        try {
            let urlString = ""
            const keysParameter = Object.keys(parameter).sort();
            const lastLength = keysParameter.length - 1

            for (let i = 0; i < keysParameter.length; i++) {
                let eachKey = keysParameter[i]

                switch (i) {
                    // case 0:
                    //     urlString += `?${eachKey}=${parameter[eachKey]}&`
                    //     break;
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
            console.log('createUrl error >>', error)
            return {
                status: 0,
                message: error.message
            }
        }
    },
}