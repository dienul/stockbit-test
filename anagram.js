function sortString(string){
    return string.split("").sort().join("")
}

function group (array){
    const uniq = []

    for(let eachArray of array){
        let isSame = false
        const sortArr = sortString(eachArray)

        for(let eachUniq of uniq){
            if(eachUniq === sortArr){
                isSame = true
            }
        }

        if(!(isSame)){
            uniq.push(sortArr)
        }
    }

    return uniq
}

function anagram(array){
    const uniqed = group(array)
    const result = {}

    for(let eachUniq of uniqed){
        result[eachUniq] = []
        
        for(let eachArray of array){
            const sortArr = sortString(eachArray)
            if(eachUniq === sortArr){
                result[eachUniq].push(eachArray)
            }
        }
    }

    return(Object.values(result))
}

console.log( anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))
console.log( anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua', 'ikat', 'nakam']))